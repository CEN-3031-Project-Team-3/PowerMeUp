import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material/";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';

export default function Hygenic() {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <Stack gap={5}>
      <Row>
        <Col>
        <header className="App-hygenic question">
          <h1>Which of the following hygenic appliances do you use? </h1>
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
                  <header className="App-hygenic2 button">
          <ToggleButton value="hair dryer" aria-label="hair dryer">
            Hair Dryer
          </ToggleButton>
          </header>
          <header className="App-hygenic2 button">

          <ToggleButton value="electric shaver" aria-label="electric shaver">
            Electric Shaver
          </ToggleButton>
          </header>
          <header className="App-hygenic2 button">

          <ToggleButton value="electric toothbrush" aria-label="electric toothbrush">
            Electric Toothbrush
          </ToggleButton>
          </header>
 
        </ToggleButtonGroup>
      </Row>
      <Row>
        <Col>
        <NavLink to="/cleaning">
          <Button>Next</Button>
        </NavLink>
        </Col>
      </Row>
    </Stack>
  );
}
