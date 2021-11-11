import db from "./firebase"
import {doc, setDoc} from "firebase/firestore"

async function sendResults(data) {
    const res = await db.collection('results').add({
        data
    });
    console.log("added document with ID: ", res.id)
    return res
}