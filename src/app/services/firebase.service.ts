import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Firestore, collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  db: Firestore;
  collection: any;


  firebaseConfig: any = {
    apiKey: "AIzaSyB5RCk6HR_82HEcMrf6htujb2sKsoBBLuY",
    authDomain: "navas-moreno-20040724.firebaseapp.com",
    databaseURL: "https://navas-moreno-20040724-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "navas-moreno-20040724",
    storageBucket: "navas-moreno-20040724.appspot.com",
    messagingSenderId: "419587359065",
    appId: "1:419587359065:web:33be5fa7949c59ca198c48",
    measurementId: "G-63KLJ3L4MH"
  };
  constructor() {

    // Initialize Firebase
    const app = initializeApp(this.firebaseConfig);
    // const analytics = getAnalytics(app);
    this.db = getFirestore(app);
  }
  getCollection = (name: string) => {
    this.collection = collection(this.db, name);
  }
  getDoc = async (name: string, id: string) => {
    const docRef = doc(this.db, name, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      return null;
    }

  }
  getCollectionData = async () => {
    const collectionSnapshot = await getDocs(this.collection);
    const collectionList = collectionSnapshot.docs.map(doc => doc.data());
    console.log(collectionList);
  }
  addCollectionDoc = async (name: string, id: string, data: any) => {
    await setDoc(doc(this.db, name, id), data);
  }
}
