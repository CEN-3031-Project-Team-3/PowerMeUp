import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material/";
import {Row, Col, Button, Stack, Container} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';
import record from './inputRecord'

export default function Results(){

    return (
        
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
        
      );
}