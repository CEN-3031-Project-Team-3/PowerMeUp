import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material/";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';

export default function Cleaning() {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
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
          value={formats}
          onChange={handleFormat}
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
          <Button>Next</Button>
        </NavLink>
        </Col>
      </Row>
    </Stack>
  );
}
