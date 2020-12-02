import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
	apiKey: process.env.ACT_APP_FIREBASE_KEY,
	authDomain: process.env.ACT_APP_FIREBASE_DOMAIN,
	databaseURL: process.env.ACT_APP_FIREBASE_DATABASE,
	projectId: process.env.ACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.ACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.ACT_APP_FIREBASE_SENDER_ID,
	appId: process.env.ACT_APP_FIREBASE_APP_ID
});

export default app;
