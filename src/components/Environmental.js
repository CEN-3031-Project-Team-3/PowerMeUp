import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material/";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';
import record from '../data/inputRecord'

export default function Environmental() {
  const [inputs, setInputs] = React.useState([]);

  const handleInput = (event, newInputs) => {
    setInputs(newInputs);
  };

  return (
    <Stack gap={5}>
      <Row>
        <Col>
          <h1 className="App-environmental">Which of the following environmental appliances do you use? </h1>
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
            value="window air conditioner" 
            aria-label="window air conditioner"
            className="appliance-button">
            Window Air Conditioner
          </ToggleButton>
          <ToggleButton 
            value="humidifier" 
            aria-label="humidifier"
            className="appliance-button">
            Humidifier
          </ToggleButton>
          <ToggleButton 
            value="Space Heater" 
            aria-label="Space Heater"
            className="appliance-button">
            Space Heater
          </ToggleButton>

        </ToggleButtonGroup>
      </Row>
      <Row className="appliance-headers">
        <Col>
        <NavLink to="/kitchen">
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
