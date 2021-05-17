import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: "AIzaSyAg7ZQNHbCk6XJEH7snkUjbvDLgxlpoTe8",
	authDomain: "jak-facebook-clone-308d9.firebaseapp.com",
	projectId: "jak-facebook-clone-308d9",
	storageBucket: "jak-facebook-clone-308d9.appspot.com",
	messagingSenderId: "25659042392",
	appId: "1:25659042392:web:393f94591f17ab6be2782d"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
