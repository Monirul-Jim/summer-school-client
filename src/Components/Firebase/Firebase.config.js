// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:import.meta.env.VITE_APIKEY,
    authDomain:import.meta.env.VITE_AUTHDOMAIN,
    projectId:import.meta.env.VITE_PROJECTID,
    storageBucket:import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
    appId:import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// apiKey: "AIzaSyCRKJpj95YJKzAly0p7ys_WwCejtv9PfaU",
// authDomain: "simple-children-school-website.firebaseapp.com",
// projectId: "simple-children-school-website",
// storageBucket: "simple-children-school-website.appspot.com",
// messagingSenderId: "162479390644",
// appId: "1:162479390644:web:6a25ecf694c99c8917fce1"