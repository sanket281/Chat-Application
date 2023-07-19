// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBA0WlJ1yrprYLdSrpXuJzd4Ymy6dqfNdQ",
  authDomain: "gedu-s-chatroom.firebaseapp.com",
  projectId: "gedu-s-chatroom",
  storageBucket: "gedu-s-chatroom.appspot.com",
  messagingSenderId: "744244512486",
  appId: "1:744244512486:web:792527666cb06e4d661d27",
  measurementId: "G-74LCDQW379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };