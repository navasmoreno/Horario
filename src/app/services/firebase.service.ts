import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Firestore, collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAiZMOA8Xwah60YhRmmcsqz7u6Yv1eABuA",
  authDomain: "navas-moreno.firebaseapp.com",
  projectId: "navas-moreno",
  storageBucket: "navas-moreno.appspot.com",
  messagingSenderId: "280089537055",
  appId: "1:280089537055:web:71cf187e885adeddf7032a"
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  db: Firestore;
  collection: any;

  constructor() {

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
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
