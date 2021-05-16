 import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC6Y9Tyq63aXuG381Do_OEhGrFuRxFOgA8",
    authDomain: "workout-app-85d59.firebaseapp.com",
    projectId: "workout-app-85d59",
    storageBucket: "workout-app-85d59.appspot.com",
    messagingSenderId: "246683470104",
    appId: "1:246683470104:web:e381a481ff87fa922bf66d",
    measurementId: "G-HVSPNX6BVG"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        // this.db = app.database(); Later add database
    }
    
    /*** Authentication  ***/
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => 
        this.auth.signOut();

    doPasswordReset = email => 
        this.auth.sendPasswordResetEmail(email);
}

export default Firebase;