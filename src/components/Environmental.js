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
          <h1>Which of the following environmental appliances do you use? </h1>
        </Col>
      </Row>
      <Row>
        <ToggleButtonGroup
          orientation="vertical"
          value={inputs}
          onChange={handleInput}
          aria-label="text formatting"
        >
          <ToggleButton value="window air conditioner" aria-label="window air conditioner">
            Window Air Conditioner
          </ToggleButton>
          <ToggleButton value="humidifier" aria-label="humidifier">
            Humidifier
          </ToggleButton>
          <ToggleButton value="heater" aria-label="heater">
            Heater
          </ToggleButton>

        </ToggleButtonGroup>
      </Row>
      <Row>
        <Col>
        <NavLink to="/kitchen">
        <Button onClick={() => {
          console.log(inputs.length)
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
