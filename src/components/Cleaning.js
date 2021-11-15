import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material/";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';
import record from './inputRecord'

export default function Cleaning() {
  const [inputs, setInputs] = React.useState([]);

  const handleInput = (event, newInputs) => {
    setInputs(newInputs);
  };

  return (
    <Stack gap={5}>
      <Row>
        <Col>
        <header className="App-cleaning question">
          <h1>Which of the following cleaning appliances do you use? </h1>
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
                    <header className="App-cleaning2 button">
          <ToggleButton value="Vacuum Cleaner" aria-label="Vacuum Cleaner">
          Vacuum Cleaner
          </ToggleButton>
          </header>
          <header className="App-cleaning2 button">
          <ToggleButton
            value="Pressure Washer"
            aria-label="Pressure Washer"
          >
            Pressure Washer
          </ToggleButton>
          </header>
          <header className="App-cleaning2 button">gi
          <ToggleButton
            value="Washing Machine"
            aria-label="Washing Machine"
          >
           Washing Machine
          </ToggleButton>
          </header>
          <header className="App-cleaning2 button">
          <ToggleButton
            value="Clothes Dryer"
            aria-label="Clothes Dryer"
          >
            Clothes Dryer
          </ToggleButton>
          </header>

        </ToggleButtonGroup>
      </Row>
      <Row>
        <Col>
        <NavLink to="/ConsumerElectronics">
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
