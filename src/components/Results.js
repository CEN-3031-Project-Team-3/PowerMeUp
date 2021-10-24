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
                    <header className="App-results">
                            <p>
                            Your results here:
                            </p>
                    </header>
                </div>
            </Col>

            <Col sm="auto">
                <div className="App">
                    <header className="App-results">

                            <p>
                            Your results here:
                            </p>
                        <div></div>
                            <p>
                                Something goes here
                            </p>
                    </header>
                </div>
            </Col>

            <Col sm="auto">
                <div className="App">
                    <header className="App-results">

                            <p>
                            Your results here:
                            </p>

                            <p>
                                Something goes here
                            </p>
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