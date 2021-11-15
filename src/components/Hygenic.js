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
          <ToggleButton value="Hair Blow Dryer" aria-label="Hair Blow Dryer">
          Hair Blow Dryer
          </ToggleButton>
          </header>
          <header className="App-hygenic2 button">
          <ToggleButton value="Electric Shaver" aria-label="Electric Shaver">
          Electric Shaver
          </ToggleButton>
          </header>
          <header className="App-hygenic2 button">
          <ToggleButton value="Electric Toothbrush" aria-label="Electric Toothbrush">
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
