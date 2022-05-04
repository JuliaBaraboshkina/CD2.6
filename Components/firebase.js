import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKOFlLLR-Jjd0R722Vsj-5v_qVLd-86Xs",
  authDomain: "cd26-72f85.firebaseapp.com",
  projectId: "cd26-72f85",
  storageBucket: "cd26-72f85.appspot.com",
  messagingSenderId: "410123512492",
  appId: "1:410123512492:web:dd07df525ebe3e887a0d09"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };