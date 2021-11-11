import React from "react";
import crud from "../utils/crud";
import record from './inputRecord';
import { useHistory } from "react-router-dom";


export default function Loading() {
    let history = useHistory();
    (async () => {
        const value = await crud.sendResults(record.getData())
        if (value != null) {
            console.log("Document ID: ", value);
            history.push('/results')
        } else {
            console.log("Error")
        }
    })()

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