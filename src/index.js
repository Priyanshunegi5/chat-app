import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA-hOJYKU0N0izmmyREspOAN3rtJMoKn7E",
  authDomain: "chat-app-5861d.firebaseapp.com",
  projectId: "chat-app-5861d",
  storageBucket: "chat-app-5861d.appspot.com",
  messagingSenderId: "717043626630",
  appId: "1:717043626630:web:fc56160ec159ad2107d707",
  measurementId: "G-WD5F4NM5WF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
