import db from "./firebase"
import { collection, addDoc } from "firebase/firestore"

const crud = {
    sendResults: async function (data) {
        try {
            const docRef = await addDoc(collection(db, "results"), {
                appliances: data
            });
            console.log("Document written with ID: ", docRef.id);
            return docRef.id;
        } catch (e) {
            console.log("Error adding document: ", e)
            return null;
        }
    }
}


export default crud