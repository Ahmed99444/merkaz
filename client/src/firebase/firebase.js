import * as firebase from "firebase";
// import * as sgMail from "@sendgrid/mail";
import keys from "../emailkey";
const { API_KEY, TEMPLATE_ID } = keys;


const firebaseConfig = {
  apiKey: "AIzaSyAs-br74FPrDEVweVqfYchMIvR4wyvZeAc",
  authDomain: "hagshama-569cb.firebaseapp.com",
  projectId: "hagshama-569cb",
  storageBucket: "hagshama-569cb.appspot.com",
  messagingSenderId: "839276615171",
  appId: "1:839276615171:web:6f62fa71e37a42c601e036",
  measurementId: "G-P0D02KFD7E",
};

firebase.default.initializeApp(firebaseConfig);

// sgMail.setApiKey(API_KEY);

export const sendEmail = firebase.default.functions().httpsCallable('sendEmail');


export default firebase;
