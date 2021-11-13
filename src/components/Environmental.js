import React from "react";

import {ToggleButton, ToggleButtonGroup} from "@mui/material/";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';

export default function Environmental() {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
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
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
                  <header className="App-environmental2 button">

          <ToggleButton value="window air conditioner" aria-label="window air conditioner">
            Window Air Conditioner
          </ToggleButton>
          </header>
          <header className="App-environmental2 button">

          <ToggleButton value="humidifier" aria-label="humidifier">
            Humidifier
          </ToggleButton>
          </header>
          <header className="App-environmental2 button">

          <ToggleButton value="heater" aria-label="heater">
            Heater
          </ToggleButton>
          </header>

        </ToggleButtonGroup>
      </Row>
      <Row>
        <Col>
        <NavLink to="/kitchen">
          <Button>Next</Button>
        </NavLink>
        </Col>
      </Row>
    </Stack>
  );
}
