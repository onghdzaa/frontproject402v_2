importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')
var firebaseConfig = {
    apiKey: "AIzaSyCD4TiW1qW_GPvhH7IS_wwpotbUCQhp34s",
    authDomain: "carwash-9ff16.firebaseapp.com",
    projectId: "carwash-9ff16",
    storageBucket: "carwash-9ff16.appspot.com",
    messagingSenderId: "287463003324",
    appId: "1:287463003324:web:40d5b77e6ec0695dfdecb9",
    measurementId: "G-2WBBJ9ZTT3"
  };
  // Initialize Firebase
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }
    
  firebase.initializeApp(firebaseConfig);
  const messaging=firebase.messaging()
