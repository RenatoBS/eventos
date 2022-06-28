import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC0vw6VC1erT2BFcoOxHj-gffxdRSbNCRI",
    authDomain: "eventos-4309c.firebaseapp.com",
    databaseURL: "https://eventos-4309c.firebaseio.com",
    projectId: "eventos-4309c",
    storageBucket: "eventos-4309c.appspot.com",
    messagingSenderId: "678882750613",
    appId: "1:678882750613:web:e1e7e67083d4463e232b9c"
};

const app = initializeApp(firebaseConfig);
export default app