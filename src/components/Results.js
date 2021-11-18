import React from "react";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';
import results_record from "./ResultsRecord";

export default function Results(){
    const index = results_record.getData();
    console.log(index)
    const maxIndex = 1000;

    const ratio = 500;

    return (
        <Stack>
        <Row className="justify-content-md-center">
            <Col sm="auto">
              <h1>Results Page </h1>
            </Col>
          </Row>

        <Row className="justify-content-md-center">
            <Col sm="auto">
                <div className="App">
                    <header className="App-results medium">
                            <h1>Your Power Index</h1>
                            <p></p>
                            <p>is: </p>
                            <h1> {ratio}</h1>
                            
                            <p> on a scale of 1 - 1000</p> 
                    </header>
                </div>
            </Col>
        </Row>
        <Row xs="auto">
            <Col>
                <NavLink to="/">
                    <Button>Return</Button>
                </NavLink>
            </Col>
        </Row>
        </Stack>

        
        
      );
}