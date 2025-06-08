from fastapi import APIRouter, WebSocket
import cv2
import numpy as np
import base64
import mediapipe as mp
import time
import pyttsx3

router = APIRouter()

# Initialize text-to-speech engine
engine = pyttsx3.init()

# Updated Morse code dictionary with numbers
MORSE_CODE_DICT = {
    '.-': 'A', '-...': 'B', 
    '-.-.': 'C', '-..': 'D', 
    '.': 'E', '..-.': 'F', 
    '--.': 'G', '....': 'H', 
    '..': 'I', '.---': 'J', 
    '-.-': 'K', '.-..': 'L', 
    '--': 'M', '-.': 'N', 
    '---': 'O', '.--.': 'P', 
    '--.-': 'Q', '.-.': 'R', 
    '...': 'S', '-': 'T', 
    '..-': 'U', '...-': 'V', 
    '.--': 'W', '-..-': 'X', 
    '-.--': 'Y','--..': 'Z', 
    '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', 
    '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9'
}

class MorseConverter:
    def __init__(self):
        self.last_blink_time = None
        self.current_morse = ""
        self.current_word = ""
        self.blink_start = None
        self.continuous_open_start = None  # وقت بداية الفتح المستمر
        self.DOT_DURATION = 0.2
        self.DASH_DURATION = 0.5
        self.LETTER_PAUSE = 2.5
        self.WORD_PAUSE = 5.0
        self.last_eye_status = "Open"

    def process_blink(self, eye_status, current_time):
        if eye_status == "Closed":
            self.continuous_open_start = None  # إعادة تعيين وقت الفتح المستمر
            if self.blink_start is None:
                self.blink_start = current_time
        else:  # العين مفتوحة
            # تتبع وقت الفتح المستمر
            if self.continuous_open_start is None:
                self.continuous_open_start = current_time
            elif current_time - self.continuous_open_start >= self.WORD_PAUSE:
                # إذا ظلت العين مفتوحة لمدة 5 ثواني
                if self.current_morse:  # إضافة الحرف الحالي إذا وجد
                    self.add_letter()
                if self.current_word:  # نطق وإعادة تعيين الكلمة الحالية
                    print(f"Word completed by continuous open: {self.current_word}")
                    engine.say(self.current_word)
                    engine.runAndWait()
                    self.current_word = ""
                self.continuous_open_start = current_time  # إعادة تعيين الوقت
            
            # معالجة نهاية الغمزة
            if self.blink_start is not None:
                blink_duration = current_time - self.blink_start
                self.blink_start = None
                
                if blink_duration >= self.DOT_DURATION:
                    if blink_duration <= self.DASH_DURATION:
                        self.current_morse += "."
                        print("Dot detected")
                    else:
                        self.current_morse += "-"
                        print("Dash detected")
                    self.last_blink_time = current_time

        # معالجة الفواصل الزمنية كما هو
        if self.last_blink_time:
            pause_duration = current_time - self.last_blink_time
            if pause_duration > self.WORD_PAUSE and self.current_morse:
                self.add_letter()
                if self.current_word:
                    print(f"Word completed by pause: {self.current_word}")
                    engine.say(self.current_word)
                    engine.runAndWait()
                    self.current_word = ""
            elif pause_duration > self.LETTER_PAUSE and self.current_morse:
                self.add_letter()

        self.last_eye_status = eye_status
        return self.current_morse, self.current_word

    def add_letter(self):
        if self.current_morse in MORSE_CODE_DICT:
            self.current_word += MORSE_CODE_DICT[self.current_morse]
        self.current_morse = ""

class EyeTracker:
    def __init__(self):
        self.mp_face_mesh = mp.solutions.face_mesh
        self.mp_drawing = mp.solutions.drawing_utils
        self.face_mesh = self.mp_face_mesh.FaceMesh(
            max_num_faces=1,
            refine_landmarks=True,
            min_detection_confidence=0.5,
            min_tracking_confidence=0.5
        )
        
        self.LEFT_EYE = [33, 160, 158, 133, 153, 144]
        self.RIGHT_EYE = [362, 385, 387, 263, 373, 380]
        self.morse_converter = MorseConverter()
        self.last_process_time = time.time()

    def process_frame(self, frame):
        current_time = time.time()
        debug_frame, ear, eye_status = self._process_frame_basic(frame)
        morse, word = self.morse_converter.process_blink(eye_status, current_time)
        return debug_frame, ear, eye_status, morse, word

    def _process_frame_basic(self, frame):
        if frame is None:
            return None, 0.0, "Unknown"
            
        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = self.face_mesh.process(frame_rgb)
        
        debug_frame = frame.copy()
        ear = 0.0
        eye_status = "Open"

        if results.multi_face_landmarks:
            landmarks = results.multi_face_landmarks[0]
            
            self.mp_drawing.draw_landmarks(
                debug_frame,
                landmarks,
                self.mp_face_mesh.FACEMESH_CONTOURS,
                self.mp_drawing.DrawingSpec(color=(0,255,0), thickness=1),
                self.mp_drawing.DrawingSpec(color=(0,255,0), thickness=1)
            )
            
            self.draw_eyes(debug_frame, landmarks)
            
            ear = self.calculate_ear(landmarks)
            eye_status = "Closed" if ear < 0.2 else "Open"
            
            # cv2.putText(debug_frame, f"EAR: {ear:.2f}", (10, 30), 
            #            cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0,255,0), 2)
            # cv2.putText(debug_frame, f"Status: {eye_status}", (10, 60), 
            #            cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0,255,0), 2)

        return debug_frame, ear, eye_status

    def draw_eyes(self, frame, landmarks):
        height, width = frame.shape[:2]
        
        for point in self.LEFT_EYE:
            x = int(landmarks.landmark[point].x * width)
            y = int(landmarks.landmark[point].y * height)
            cv2.circle(frame, (x, y), 2, (0,0,255), -1)
            
        for point in self.RIGHT_EYE:
            x = int(landmarks.landmark[point].x * width)
            y = int(landmarks.landmark[point].y * height)
            cv2.circle(frame, (x, y), 2, (0,0,255), -1)

    def calculate_ear(self, landmarks):
        try:
            left_ear = self._calculate_single_ear(landmarks, self.LEFT_EYE)
            right_ear = self._calculate_single_ear(landmarks, self.RIGHT_EYE)
            return (left_ear + right_ear) / 2.0
        except:
            return 0.0

    def _calculate_single_ear(self, landmarks, eye_points):
        points = []
        for point in eye_points:
            landmark = landmarks.landmark[point]
            points.append(np.array([landmark.x, landmark.y]))
        
        vert1 = np.linalg.norm(points[1] - points[5])
        vert2 = np.linalg.norm(points[2] - points[4])
        horz = np.linalg.norm(points[0] - points[3])
        
        return (vert1 + vert2) / (2.0 * horz)

@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    print("WebSocket connected")
    
    eye_tracker = EyeTracker()

    try:
        while True:
            try:
                data = await websocket.receive_text()
                frame_data = eval(data).get("image", "")
                
                if not frame_data:
                    continue

                img_bytes = base64.b64decode(frame_data)
                img_np = np.frombuffer(img_bytes, np.uint8)
                frame = cv2.imdecode(img_np, cv2.IMREAD_COLOR)
                
                debug_frame, ear, eye_status, morse, word = eye_tracker.process_frame(frame)
                
                _, buffer = cv2.imencode('.jpg', debug_frame)
                debug_frame_base64 = base64.b64encode(buffer).decode('utf-8')

                await websocket.send_json({
                    "debug_frame": debug_frame_base64,
                    "eye_status": eye_status,
                    "ear": float(ear),
                    "morse": morse,
                    "word": word
                })

            except Exception as e:
                print(f"Frame processing error: {str(e)}")
                break

    except Exception as e:
        print(f"WebSocket error: {str(e)}")
    finally:
        await websocket.close()
        eye_tracker.face_mesh.close()
