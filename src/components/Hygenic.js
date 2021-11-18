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
          <h1 className="App-hygenic">Which of the following hygenic appliances do you use? </h1>
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
            value="Hair Blow Dryer" 
            aria-label="Hair Blow Dryer"
            className="appliance-button">
            Hair Blow Dryer
          </ToggleButton>
          <ToggleButton 
            value="electric shaver" 
            aria-label="electric shaver"
            className="appliance-button">
            Electric Shaver
          </ToggleButton>
          <ToggleButton 
            value="electric toothbrush" 
            aria-label="electric toothbrush"
            className="appliance-button">
            Electric Toothbrush
          </ToggleButton>
 
        </ToggleButtonGroup>
      </Row>
      <Row className="appliance-headers">
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
