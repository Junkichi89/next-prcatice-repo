// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";

let app: FirebaseApp;

const firebaseConfig = {
  apiKey: "AIzaSyCtPJccubFnKssz4XVT-CmMhLZ19D6AxyU",
  authDomain: "practice-next-app-55c4a.firebaseapp.com",
  projectId: "practice-next-app-55c4a",
  storageBucket: "practice-next-app-55c4a.appspot.com",
  messagingSenderId: "956915389934",
  appId: "1:956915389934:web:3e75d38aa8a23b3b39eaff",
  measurementId: "G-78D9S9YC2J"
};

// Initialize Firebase
if(getApps().length) {
  app = getApp();
} else {
  app = initializeApp(firebaseConfig)
}

export default app;