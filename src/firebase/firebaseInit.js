import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgtlWSVDIgGBr5B1BYyYUEFlzzI6g2B2s",
  authDomain: "fireblogs-4272a.firebaseapp.com",
  projectId: "fireblogs-4272a",
  storageBucket: "fireblogs-4272a.appspot.com",
  messagingSenderId: "650106064511",
  appId: "1:650106064511:web:afdd0643ef3a6981b1794a",
  measurementId: "G-YH0L38E9Z3"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();