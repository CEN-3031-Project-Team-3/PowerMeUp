import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material/";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';
import record from './inputRecord'

export default function ConsumerElectronics() {
  const [inputs, setInputs] = React.useState([]);

  const handleInput = (event, newInputs) => {
    setInputs(newInputs);
  };

  return (
    <Stack gap={5}>
      <Row>
        <Col>
          <h1 className="appliance-headers">Which of the following entertainment appliances do you use? </h1>
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
            value="LED/LCD Television" 
            aria-label="LED/LCD Television"
            className="appliance-button">
            LED/LCD Television
          </ToggleButton>
          <ToggleButton
            value="Surround Sound System"
            aria-label="Surround Sound System"
            className="appliance-button"
          >
            Surround Sound System
          </ToggleButton>
          <ToggleButton 
            value="Blu-ray Player" 
            aria-label="Blu-ray Player"
            className="appliance-button">
            Blu-ray Player
          </ToggleButton>
          <ToggleButton 
            value="Playstation 4" 
            aria-label="Playstation 4"
            className="appliance-button">
            Playstation 4
          </ToggleButton>
          <ToggleButton 
            value="Xbox One" 
            aria-label="Xbox One"
            className="appliance-button">
            Xbox One
          </ToggleButton>
          <ToggleButton 
            value="Playstation 5" 
            aria-label="Playstation 5"
            className="appliance-button">
            Playstation 5
          </ToggleButton>
          <ToggleButton 
            value="Xbox Series X" 
            aria-label="Xbox Series X"
            className="appliance-button">
            Xbox Series X
          </ToggleButton>
          <ToggleButton 
            value="Chromebook" 
            aria-label="Chromebook"
            className="appliance-button">
            Chromebook
          </ToggleButton>
          <ToggleButton 
            value="Desktop Computer" 
            aria-label="Desktop Computer"
            className="appliance-button">
            Desktop Computer
          </ToggleButton>
          <ToggleButton 
            value="Laptop" 
            aria-label="Laptop"
            className="appliance-button">
            Laptop
          </ToggleButton>
        </ToggleButtonGroup>
      </Row>
      <Row className="appliance-headers">
        <Col>
        <NavLink to="/loading">
        <Button onClick={() => {
            inputs.forEach(element => {
              record.add(element);
            });
            record.show();
          }}>
          Next
          </Button>
        </NavLink>
        </Col>
      </Row>
    </Stack>
  );
}
