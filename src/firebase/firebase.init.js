import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBdPvA0r6XXhiXOWpXkTZkVe2uaQUE5otQ",
    authDomain: "coffee-store-app-b9b68.firebaseapp.com",
    projectId: "coffee-store-app-b9b68",
    storageBucket: "coffee-store-app-b9b68.firebasestorage.app",
    messagingSenderId: "389379346556",
    appId: "1:389379346556:web:0eea71648556cf0347b9f9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);