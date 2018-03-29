
import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
            apiKey: "your key",
            authDomain: "your key",
            databaseURL: "your key",
            projectId: "your key",
            storageBucket: "your key",
            messagingSenderId: "your key"
        });
    }

}

module.exports = Firebase;
