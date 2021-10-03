import Firebase from 'firebase/compat/app';
import "firebase/compat/auth";


const config = {
    apiKey: "AIzaSyAQQzZn2L_zdlAR3J8tEkaHTXZ7TsYomOo",
    authDomain: "react-blog-login.firebaseapp.com",
    projectId: "react-blog-login",
    storageBucket: "react-blog-login.appspot.com",
    messagingSenderId: "769236977761",
    appId: "1:769236977761:web:20b23ba33df9101dd3c220",
    measurementId: "G-2NMHN28K7E"
};

const firebase = Firebase.initializeApp(config);

const auth = firebase.auth();

export { firebase, auth};