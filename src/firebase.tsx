import { FirebaseApp, initializeApp } from "firebase/app";
import {
  DocumentData,
  Firestore,
  getFirestore,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { collection, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCg7KteEGxUq-SywflPnufPniamSOPa024",
  authDomain: "ceremonia2023-2cc12.firebaseapp.com",
  projectId: "ceremonia2023-2cc12",
  storageBucket: "ceremonia2023-2cc12.appspot.com",
  messagingSenderId: "137112455813",
  appId: "1:137112455813:web:929c5359b76a74d85b37ec",
  measurementId: "G-MBD9184LLM",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

const db: Firestore = getFirestore(app);

const readData = async (docId: string) => {
  const docRef = doc(db, "controls", docId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    //console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

const updateData = async (dataToUpdate: {}, docId: string): Promise<void> => {
  const docRef = doc(db, "controls", docId);
  try {
    await updateDoc(docRef, dataToUpdate);
    console.log("Data updated successfully");
  } catch (err) {
    console.log("Error Updating data: ", err);
  }
};

export const FIREBASE_OBJECTS = { readData, updateData };
