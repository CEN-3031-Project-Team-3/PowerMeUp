import React from "react";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';
import results_record from "./ResultsRecord";

export default function Results(){
    const index = results_record.getData();
    console.log(index)
    const maxIndex = 1000;

    const ratio = index/maxIndex;

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
        </Stack>

        /*
        <Stack gap={4}>

          <Row className="justify-content-md-center">
            <Col sm="auto">
              <h1>Results Page </h1>
            </Col>
          </Row>
          
          <Row className="justify-content-md-center">
            <Col sm="auto">
                <div className="App">
                    <header className="App-results bad">
                            <h1>Coal</h1>
                            <p></p>
                            <p>Your energy consumption would require: </p>
                            <h2>35</h2>
                            <p> tons of coal every week</p> 
                    </header>
                </div>
            </Col>

            <Col sm="auto">
                <div className="App">
                    <header className="App-results bad">
                    <h1>Natural Gas</h1>
                    <p></p>
                    <p>Your energy consumption would require: </p>
                    <h2>20</h2>
                    <p> tons of natural gas every week</p>
                    </header>
                </div>
            </Col>

        </Row>
        <Row className="justify-content-md-center">
            <Col sm="auto">
                <div className="App">
                    <header className="App-results good">
                    <h1>Solar</h1>
                            <p></p>
                            <p>Your energy consumption would require: </p>
                            <h2>200</h2>
                            <p> sq ft of solar panels</p>
                    </header>
                </div>
            </Col>

            <Col sm="auto">
                <div className="App">
                    <header className="App-results good">
                    <h1>Wind</h1>
                            <p></p>
                            <p>A large wind turbine could power: </p>
                            <h2>200</h2>
                            <p> homes with your energy usage</p>
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
        */
      );
}