import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material/";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';

export default function Results(){

    const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    return (
        <Stack gap={5}>
          <Row>
            <Col>
              <h1>Results Page </h1>
            </Col>
          </Row>
          <Row>
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
            <Col md={{ span:4, offset:5 }}>
                <NavLink to="/">
                    <Button>Return</Button>
                </NavLink>
            </Col>
        </Row>
            
        </Stack>
      );
}