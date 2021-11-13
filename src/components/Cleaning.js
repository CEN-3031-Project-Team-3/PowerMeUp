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
          <ToggleButton value="vacuum cleaner" aria-label="vacuum cleaner">
            Vacuum Cleaner
          </ToggleButton>
          </header>
          <header className="App-cleaning2 button">
          <ToggleButton
            value="pressure washer"
            aria-label="pressure washer"
          >
            Pressure Washer
          </ToggleButton>
          </header>
          <header className="App-cleaning2 button">
          <ToggleButton
            value="laundry washer"
            aria-label="laundry washer"
          >
            Laundry Washer
          </ToggleButton>
          </header>
          <header className="App-cleaning2 button">
          <ToggleButton
            value="laundry dryer"
            aria-label="laundry dryer"
          >
            Laundry Dryer
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
