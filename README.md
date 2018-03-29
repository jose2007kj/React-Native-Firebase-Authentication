**React Native firebase starter with login,signup,logout**
* update index.js file with your firebase config
 > firebase.initializeApp ({ 
    apiKey: "your key",
            authDomain: "your key",
            databaseURL: "your key",
            projectId: "your key",
            storageBucket: "your key",
            messagingSenderId: "your key"
});

* npm install #for installing all packages
* react-native upgrade #to add android/ios folders
* then create a folder assets inside android/app/src/main
* then run this command
  * react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
* finally this for running in android
  * react-native run-android #for testing in real device


* After making changes to code i follow these steps
  * react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res


  * npm start(for live reloading)
