import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material/";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';
import record from './inputRecord'

export default function Kitchen() {
  const [inputs, setInputs] = React.useState([]);

  const handleInput = (event, newInputs) => {
    setInputs(newInputs);
  };

  return (
    <Stack gap={5}>
      <Row>
        <Col>
        <header className="App-kitchen question">
          <h1>Which of the following kitchen appliances do you use? </h1>
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
                            <header className="App-kitchen2 button">
          <ToggleButton value="refrigerator" aria-label="refrigerator">
            Refrigerator
          </ToggleButton>
          </header>
          <header className="App-kitchen2 button">
          <ToggleButton
            value="dishwashing machine"
            aria-label="diswashing machine"
          >
            Dishwashing Machine
          </ToggleButton>
          </header>
          <header className="App-kitchen2 button">
          <ToggleButton value="oven" aria-label="oven">
            Oven
          </ToggleButton>
          </header>
          <header className="App-kitchen2 button">
          <ToggleButton value="toaster" aria-label="toaster">
            Toaster
          </ToggleButton>
          </header>
          <header className="App-kitchen2 button">
          <ToggleButton value="Microwave" aria-label="Microwave">
            Microwave
          </ToggleButton>
          </header>
          <header className="App-kitchen2 button">
          <ToggleButton value="Coffee Maker" aria-label="Coffee Maker">
            Coffee Maker
          </ToggleButton>
          </header>
        </ToggleButtonGroup>
      </Row>
      <Row>
        <Col>
        <NavLink to="/hygenic">
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
