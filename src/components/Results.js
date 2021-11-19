import React from "react";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';
import data from "../data/inputRecord";

export default function Results(){
    data.show()

    const number = data.computeEnergyUsage();
    const inMin = 0;
    const inMax = 5236;
    const outMin = 1;
    const outMax = 1000;
    const mapped = (number-inMin)/(inMax-inMin) * (outMax-outMin) + outMin;

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
                    <header className="App-results2 medium">
                            <h1>Your Power Index</h1>
                            <p></p>
                            <p>is: </p>
                            <h1> {mapped.toFixed()}</h1>
                            
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