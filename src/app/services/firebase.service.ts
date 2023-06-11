import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Firestore, Query, collection, doc, getDoc, getDocs, getFirestore, query, setDoc } from 'firebase/firestore/lite';
import { firebaseConfig } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  db: Firestore;

  constructor() {

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    this.db = getFirestore(app);
  }
  getCollection = (name: string) => {
    debugger;
    var data = collection(this.db, name);
    return data;
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
  async getAllDocs(name: string) {
    const q = query(collection(this.db,name));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  }
  getDocs = async (query: Query) => {
    const querySnapshot = await getDocs(query);
    return querySnapshot;
  }
  addCollectionDoc = async (name: string, id: string, data: any) => {
    await setDoc(doc(this.db, name, id.trim()), data);
  }
}
