import React from "react";
import crud from "../utils/crud"
import record from './inputRecord'

export default function Loading() {
    console.log("pre")
    try {
        crud.sendResults(record.getData())
    } catch(e) {
        console.error("Error adding document: ", e);
    }

    console.log("post")
    return (
        <div className="App">
            <header className="App-loading">
                <br></br>
                <br></br>
                <br></br>
                <p>
                    Loading Page Here
                </p>
                <br></br>
            </header>
        </div>
    );
}