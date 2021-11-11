import db from "./firebase"
import { collection, addDoc } from "firebase/firestore"

const crud = {
    sendResults: async function(data) {
        const docRef = await addDoc(collection(db, "results"), {
            appliances: data
        });
        console.log("Document written with ID: ", docRef.id);
        return docRef
    }
}


export default crud