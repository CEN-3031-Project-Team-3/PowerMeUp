import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material/";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';
import record from './inputRecord'

export default function Environmental() {
  const [inputs, setInputs] = React.useState([]);

  const handleInput = (event, newInputs) => {
    setInputs(newInputs);
  };

  return (
    <Stack gap={5}>
      <Row>
        <Col>
        <header className="App-environmental question">
          <h1>Which of the following environmental appliances do you use? </h1>
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
                            <header className="App-environmental2 button">
          <ToggleButton value="Window Air Conditioner" aria-label="Window Air Conditioner">
          Window Air Conditioner
          </ToggleButton>
          </header>
          <header className="App-environmental2 button">
          <ToggleButton value="Humidifier" aria-label="Humidifier">
          Humidifier
          </ToggleButton>
          </header>
          <header className="App-environmental2 button">
          <ToggleButton value="Space Heater" aria-label="Space Heater">
          Space Heater
          </ToggleButton>
          </header>

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
