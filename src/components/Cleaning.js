import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material/";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';
import record from '../data/inputRecord'

export default function Cleaning() {
  const [inputs, setInputs] = React.useState([]);

  const handleInput = (event, newInputs) => {
    setInputs(newInputs);
  };

  return (
    <Stack gap={5}>
      <Row>
        <Col>
          <h1 className="App-cleaning">Which of the following cleaning appliances do you use? </h1>
        </Col>
      </Row>
      <Row>
        <ToggleButtonGroup
          orientation="vertical"
          value={inputs}
          onChange={handleInput}
          aria-label="text formatting"
          size="large"
          color="warning"
        >
          <ToggleButton 
            value="vacuum cleaner" 
            aria-label="vacuum cleaner" 
            className="appliance-button">
            Vacuum Cleaner
          </ToggleButton>
          <ToggleButton
            value="pressure washer"
            aria-label="pressure washer"
            className="appliance-button"
          >
            Pressure Washer
          </ToggleButton>
          <ToggleButton
            value="Washing Machine"
            aria-label="Washing Machine"
            className="appliance-button"
          >
            Washing Machine
          </ToggleButton>
          <ToggleButton
            value="Clothes Dryer"
            aria-label="Clothes Dryer"
            className="appliance-button"
          >
            Clothes Dryer
          </ToggleButton>

        </ToggleButtonGroup>
      </Row>
      <Row className="appliance-headers">
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
