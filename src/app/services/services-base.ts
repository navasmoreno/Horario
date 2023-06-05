import { QuerySnapshot } from "firebase/firestore/lite";
import { FirebaseService } from "./firebase.service";

export class ServicesBase {
    protected name: string;
    querySnapshot: QuerySnapshot | null = null;
    constructor(
        public firebaseService: FirebaseService, name:string=""
    ) {
        this.name = name;
        this.getAllDocs();
    }
    getAllDocs = async () => {
        if (this.querySnapshot == null)
            this.querySnapshot = await this.firebaseService.getAllDocs(this.name);
    }

    getHeaderItems = async () => {
        var items: any = [];
        if (this.querySnapshot == null) {
            await this.getAllDocs();
        }
        if (this.querySnapshot != null) {
            this.querySnapshot.forEach((doc) => {
                console.log(doc.data())
                const data = doc.data();
                items.push(
                    { nombre: data['nombre'], link: doc.id }
                )
            });
        }
        return items;
    }
    getCollection() {
        return this.firebaseService.getCollection(this.name);
    }

    getDoc = (id: string) => {
        return this.firebaseService.getDoc(this.name, id);
    }
    addCollectionDoc = async (id: string, data: any) => {
        this.firebaseService.addCollectionDoc(this.name, id, data);
    }
}
