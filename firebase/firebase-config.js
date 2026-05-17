import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD4ucjiF7IjSJUnVS0hFURYI75xZaTLo7k",
  authDomain: "cafe-99.firebaseapp.com",
  databaseURL: "https://cafe-99-default-rtdb.firebaseio.com",
  projectId: "cafe-99",
  storageBucket: "cafe-99.firebasestorage.app",
  messagingSenderId: "750275360719",
  appId: "1:750275360719:web:23aed0aca397a88ae304ba"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
