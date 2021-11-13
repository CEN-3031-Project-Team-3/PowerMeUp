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
        <header className="App-consumerelectronics question">
          <h1>Which of the following entertainment appliances do you use? </h1>
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
                    <header className="App-consumerelectronics2 button">
          <ToggleButton value="LED/LCD Television" aria-label="LED/LCD Television">
            LED/LCD Television
          </ToggleButton>
          </header>
          <header className="App-consumerelectronics2 button">
          <ToggleButton
            value="Surround Sound System"
            aria-label="Surround Sound System"
          >
            Surround Sound System
          </ToggleButton>
          </header>
          <header className="App-consumerelectronics2 button">
          <ToggleButton value="Blu-ray Player" aria-label="Blu-ray Player">
            Blu-ray Player
          </ToggleButton>
          </header>
          <header className="App-consumerelectronics2 button">
          <ToggleButton value="Playstation 4" aria-label="Playstation 4">
            Playstation 4
          </ToggleButton>
          </header>
          <header className="App-consumerelectronics2 button">
          <ToggleButton value="Xbox One" aria-label="Xbox One">
            Xbox One
          </ToggleButton>
          </header>
          <header className="App-consumerelectronics2 button">
          <ToggleButton value="Playstation 5" aria-label="Playstation 5">
            Playstation 5
          </ToggleButton>
          </header>
          <header className="App-consumerelectronics2 button">
          <ToggleButton value="Xbox Series X" aria-label="Xbox Series X">
            Xbox Series X
          </ToggleButton>
          </header>
          <header className="App-consumerelectronics2 button">
          <ToggleButton value="Chromebook" aria-label="Chromebook">
            Chromebook
          </ToggleButton>
          </header>
          <header className="App-consumerelectronics2 button">
          <ToggleButton value="Desktop Computer" aria-label="Desktop Computer">
            Desktop Computer
          </ToggleButton>
          </header>
          <header className="App-consumerelectronics2 button">
          <ToggleButton value="Laptop" aria-label="Laptop">
            Laptop
          </ToggleButton>
          </header>
        </ToggleButtonGroup>
      </Row>
      <Row>
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
