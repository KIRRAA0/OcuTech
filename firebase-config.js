// Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// إعدادات مشروع Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDywcdl-REhKEee7JGJX1RKpftd7vQxL8g",
  authDomain: "ocutech-594dc.firebaseapp.com",
  databaseURL: "https://ocutech-594dc-default-rtdb.firebaseio.com", // احتياطي لو حبيت تستخدم Realtime DB
  projectId: "ocutech-594dc",
  storageBucket: "ocutech-594dc.appspot.com",
  messagingSenderId: "703859953645",
  appId: "1:703859953645:web:c4e64e80da765f876821e4"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);

// تهيئة Auth & Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// تصدير الخدمات لو هتستخدمهم في ملفات تانية
export { app, auth, db };