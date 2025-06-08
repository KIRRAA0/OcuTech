# OcuTech - Eye-Based Morse Code Communication System

[![Python](https://img.shields.io/badge/Python-3.9%2B-blue)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115%2B-green)](https://fastapi.tiangolo.com)
[![OpenCV](https://img.shields.io/badge/OpenCV-4.11%2B-red)](https://opencv.org)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

An innovative web application that enables communication through eye movements and morse code using computer vision and IoT technologies.

## 🌟 Features

### Core Functionality
- **Eye Tracking**: Real-time eye movement detection using MediaPipe
- **Morse Code Conversion**: Converts blink patterns to text
- **Text-to-Speech**: Audio output for converted text
- **User Authentication**: Secure login/signup system with JWT tokens
- **Dynamic Navigation**: Smart login/logout buttons based on authentication state
- **Admin Dashboard**: User management interface
- **Real-time Processing**: WebSocket-based camera processing
- **Cross-Tab Sync**: Authentication state synchronized across browser tabs

### Technical Features
- **Computer Vision**: MediaPipe facial landmark detection
- **Blink Detection**: Eye Aspect Ratio (EAR) calculation
- **Pattern Recognition**: Dot/dash pattern from blink duration
- **Database Management**: SQLite with custom ORM
- **Security**: bcrypt password hashing, JWT authentication
- **State Management**: localStorage-based authentication state
- **Responsive Design**: Mobile-friendly interface with adaptive navigation

## 🌟 Key Features

1. **Eye Movement Detection**: MediaPipe facial landmarks for precise tracking
2. **Morse Code Conversion**: Real-time blink pattern analysis and translation
3. **Smart Authentication**: JWT-based secure login/signup with dynamic UI
4. **Adaptive Navigation**: Login/logout buttons that respond to authentication state
5. **Real-time Processing**: WebSocket camera communication for instant feedback
6. **Text-to-Speech**: Audio output for converted morse code messages
7. **Admin Dashboard**: Comprehensive user management interface
8. **Cross-Tab Synchronization**: Authentication state shared across browser tabs
9. **Responsive Design**: Mobile-friendly interface that works on all devices
10. **Session Management**: Secure logout with complete data cleanup

## 🎯 Use Cases

This system is designed for:
- **Accessibility**: Helping people with motor disabilities communicate
- **Medical Applications**: Patient communication in clinical settings
- **Emergency Situations**: Silent communication when speech is not possible
- **Research**: Eye movement and morse code studies

## 🛠️ Technology Stack

### Backend
- **FastAPI**: Modern Python web framework
- **OpenCV**: Computer vision processing
- **MediaPipe**: Face mesh and landmark detection
- **SQLite**: Lightweight database
- **JWT**: Token-based authentication
- **bcrypt**: Password hashing
- **pyttsx3**: Text-to-speech synthesis

### Frontend
- **HTML5/CSS3**: Modern web standards
- **Vanilla JavaScript**: No framework dependencies
- **WebRTC**: Camera access
- **WebSockets**: Real-time communication
- **Responsive Design**: Mobile-friendly interface

## 🚀 Quick Start

### Prerequisites
- Python 3.9 or higher
- Webcam/camera access
- Modern web browser with WebRTC support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ocutech.git
   cd ocutech
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**
   ```bash
   python main.py
   ```

4. **Access the application**
   ```
   Open your browser to: http://127.0.0.1:8000
   ```

## 📖 Usage Guide

### Getting Started
1. **Create an Account**: Navigate to `/signup` and register
2. **Login**: Use your credentials to access the system
3. **Camera Setup**: Go to `/camera.html` and allow camera permissions
4. **Start Communicating**: Use eye blinks to generate morse code

### Morse Code Patterns
- **Dot (.)**: Quick blink (≤0.2 seconds)
- **Dash (-)**: Long blink (>0.5 seconds)
- **Letter Separation**: 2.5 second pause
- **Word Separation**: 5 second pause

### Example
To spell "SOS":
- S: Quick-Quick-Quick (. . .)
- O: Long-Long-Long (- - -)
- S: Quick-Quick-Quick (. . .)

## 🏗️ Project Structure

```
project11111/
├── main.py                 # FastAPI application entry point
├── auth.py                 # Authentication routes
├── auth_service.py         # JWT token management
├── database.py             # Database operations
├── morse_main.py           # Eye tracking and morse code logic
├── requirements.txt        # Python dependencies
├── index.html              # Main landing page
├── camera.html             # Camera interface
├── style.css               # Main stylesheet
├── component.css           # Component styles
├── auth-ui.js              # Authentication UI logic
├── component.js            # UI components
├── login/                  # Login interface
│   ├── login.html
│   └── login.css
├── signup/                 # Signup interface
│   ├── signup.html
│   └── signup.css
├── dashboard/              # Admin dashboard
├── images/                 # Static images
└── docs/                   # Documentation
```

## 🔧 API Endpoints

### Authentication
- `POST /api/signup` - User registration
- `POST /api/login` - User login

### WebSocket
- `WS /ws` - Real-time camera processing

### Static Files
- `/` - Main application
- `/login` - Login interface
- `/signup` - Registration interface
- `/camera.html` - Camera interface

## 🎛️ Configuration

### Environment Variables
Create a `.env` file (optional):
```env
SECRET_KEY=your_secret_key_here
DATABASE_URL=sqlite:///morse_app.db
```

### Camera Settings
The system automatically detects and uses the default camera. Ensure:
- Camera permissions are granted
- Good lighting conditions
- Clear view of your face and eyes

## 🧪 Testing

### Manual Testing
1. **Signup Process**: Create a new account
2. **Login Process**: Authenticate with credentials
3. **Camera Function**: Test eye tracking accuracy
4. **Morse Code**: Verify pattern recognition

### API Testing
```bash
# Test signup
curl -X POST http://127.0.0.1:8000/api/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123","firstName":"Test","lastName":"User","dateOfBirth":"1990-01-01"}'

# Test login
curl -X POST http://127.0.0.1:8000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

## 🔐 Security Features

- **Password Hashing**: bcrypt with salt
- **JWT Tokens**: Secure session management
- **Input Validation**: Server-side validation
- **SQL Injection Prevention**: Parameterized queries
- **CORS Configuration**: Controlled cross-origin requests
- **Error Handling**: Secure error messages

## 📊 Performance Optimization

- **Real-time Processing**: Optimized camera frame processing
- **Efficient Algorithms**: Fast EAR calculation
- **Memory Management**: Proper resource cleanup
- **Error Recovery**: Graceful failure handling

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Setup
```bash
# Install development dependencies
pip install -r requirements.txt

# Run in development mode
python main.py
```

## 📋 System Requirements

### Minimum Requirements
- **OS**: Windows 10, macOS 10.14, Ubuntu 18.04
- **Python**: 3.9+
- **RAM**: 4GB
- **Camera**: Any USB/built-in webcam
- **Browser**: Chrome 80+, Firefox 75+, Safari 13+

### Recommended Requirements
- **RAM**: 8GB+
- **Camera**: HD webcam with good low-light performance
- **Lighting**: Well-lit environment for optimal tracking

## 🐛 Troubleshooting

### Common Issues

**Camera not detected:**
- Check camera permissions in browser
- Ensure no other applications are using the camera
- Try refreshing the page

**Eye tracking not working:**
- Ensure good lighting conditions
- Position face clearly in camera view
- Check for reflections on glasses

**Login/Signup issues:**
- Check network connection
- Verify server is running on correct port
- Clear browser cache and cookies

## 📝 Changelog

### Version 2.1.0 (Latest)
- ✅ Added dynamic authentication state management
- ✅ Implemented smart login/logout button visibility
- ✅ Added cross-tab authentication synchronization
- ✅ Enhanced responsive design for mobile devices
- ✅ Improved user experience with adaptive navigation

### Version 2.0.0
- ✅ Fixed signup form conflicts
- ✅ Enhanced error handling
- ✅ Improved JSON response consistency
- ✅ Added comprehensive logging
- ✅ Better user experience

### Version 1.0.0
- 🎉 Initial release
- 👁️ Basic eye tracking
- 📟 Morse code conversion
- 🔐 User authentication

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **MediaPipe**: Google's ML framework for perception pipelines
- **OpenCV**: Open source computer vision library
- **FastAPI**: Modern web framework for building APIs
- **Delta University**: Academic support and guidance

## 📞 Support

For support and questions:
- **Email**: support@ocutech.example.com
- **Issues**: [GitHub Issues](https://github.com/yourusername/ocutech/issues)
- **Documentation**: [Full Documentation](docs/)

## 🔗 Links

- **Live Demo**: [Try OcuTech](https://demo.ocutech.example.com)
- **Documentation**: [Full Documentation](https://docs.ocutech.example.com)
- **Paper**: [Research Paper](https://papers.ocutech.example.com)

---

**Made with ❤️ for accessibility and communication** 