import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material/";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';

export default function Kitchen() {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <Stack gap={5}>
      <Row>
        <Col>
        <header className="App-kitchen question">
          <h1>Which of the following kitchen appliances do you use? </h1>
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
                  <header className="App-kitchen2 button">
          <ToggleButton value="refrigerator" aria-label="refrigerator">
            Refrigerator
          </ToggleButton>
          </header>
          <header className="App-kitchen2 button">

          <ToggleButton
            value="dishwashing machine"
            aria-label="diswashing machine"
          >
            Dishwashing Machine
          </ToggleButton>
          </header>
          <header className="App-kitchen2 button">

          <ToggleButton value="oven" aria-label="oven">
            Oven
          </ToggleButton>
          </header>
          <header className="App-kitchen2 button">

          <ToggleButton value="toaster" aria-label="toaster">
            Toaster
          </ToggleButton>
          </header>
          <header className="App-kitchen2 button">

          <ToggleButton value="Microwave" aria-label="Microwave">
            Microwave
          </ToggleButton>
          </header>
          <header className="App-kitchen2 button">

          <ToggleButton value="Coffee Maker" aria-label="Coffee Maker">
            Coffee Maker
          </ToggleButton>
          </header>
        </ToggleButtonGroup>
      </Row>
      <Row>
        <Col>
        <NavLink to="/hygenic">
          <Button>Next</Button>
        </NavLink>
        </Col>
      </Row>
    </Stack>
  );
}
