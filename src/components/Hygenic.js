import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material/";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';
import record from './inputRecord'

export default function Hygenic() {
  const [inputs, setInputs] = React.useState([]);

  const handleInput = (event, newInputs) => {
    setInputs(newInputs);
  };

  return (
    <Stack gap={5}>
      <Row>
        <Col>
        <header className="App-hygenic question">
          <h1>Which of the following hygenic appliances do you use? </h1>
          </header>
        </Col>
      </Row>
      <Row>
        <ToggleButtonGroup
          orientation="vertical"
          value={inputs}
          onChange={handleInput}
          aria-label="text formatting"
        >
                            <header className="App-hygenic2 button">
          <ToggleButton value="hair dryer" aria-label="hair dryer">
            Hair Dryer
          </ToggleButton>
          </header>
          <header className="App-hygenic2 button">
          <ToggleButton value="electric shaver" aria-label="electric shaver">
            Electric Shaver
          </ToggleButton>
          </header>
          <header className="App-hygenic2 button">
          <ToggleButton value="electric toothbrush" aria-label="electric toothbrush">
            Electric Toothbrush
          </ToggleButton>
          </header>
 
        </ToggleButtonGroup>
      </Row>
      <Row>
        <Col>
        <NavLink to="/cleaning">
        <Button onClick={() => {
            if (inputs.length>=1) { 
            inputs.forEach(element => {
              record.add(element);
            });
          }
          }}>
          Next
          </Button>
        </NavLink>
        </Col>
      </Row>
    </Stack>
  );
}
