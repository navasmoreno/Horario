import { QuerySnapshot } from "firebase/firestore/lite";
import { FirebaseService } from "./firebase.service";

export class ServicesBase {
    protected name: string;
    querySnapshot: QuerySnapshot | null = null;
    constructor(
        public firebaseService: FirebaseService, name: string = ""
    ) {
        this.name = name;
        this.getAllDocs();
    }
    async getAllDocs() {
        if (this.querySnapshot == null) {
            // console.log(`Buscando los items de ${this.name}`);
            this.querySnapshot = await this.firebaseService.getAllDocs(this.name);
        }
    }

    async getHeaderItems() {
        var items: any = [];
        if (this.querySnapshot == null) {
            await this.getAllDocs();
        }
        if (this.querySnapshot != null) {
            this.querySnapshot.forEach((doc) => {
                const data = doc.data();
                items.push(
                    { nombre: data['nombre'], link: doc.id }
                )
            });
        }
        return items;
    }
    async getItems() {
        var items: any = [];
        if (this.querySnapshot == null) {
            await this.getAllDocs();
        }
        if (this.querySnapshot != null) {
            this.querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
        }
        return items;

    }
    getCollection() {
        return this.firebaseService.getCollection(this.name);
    }

    async getDoc(id: string) {
        if (this.querySnapshot == null) {
            await this.getAllDocs();
        }
        if (this.querySnapshot != null) {
            const item = this.querySnapshot.docs.find(item => item.id == id);
            if (!!item) return item.data();
        }
        return this.firebaseService.getDoc(this.name, id);
    }
    async addCollectionDoc(id: string, data: any) {
        this.firebaseService.addCollectionDoc(this.name, id.trim(), data);
    }
}
