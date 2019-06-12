/* eslint-disable import/no-extraneous-dependencies */
import * as firebase from 'firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import '@firebase/database';
import '@firebase/storage';

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};

const app = firebase.apps[0] || firebase.initializeApp(firebaseConfig, 'merle');

export default app;
