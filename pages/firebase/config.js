import firebase from "./firebase/app"
import firebase from "firebase/auth"
if (!firebase.apps.length){
    firebase.inicializeapp({ apiKey: "AIzaSyC8QZl9-ruXM0P-L2HWXg72puWMscG649M",
    authDomain: "admin-tempplates.firebaseapp.com",
    projectId: "admin-tempplates",
    storageBucket: "admin-tempplates.appspot.com",
    messagingSenderId: "621519456891",
    appId: "1:621519456891:web:8f09e9ef1fc655297b70de",
    measurementId: "G-SRE0LMJQD9"} )}
    export default firebase

