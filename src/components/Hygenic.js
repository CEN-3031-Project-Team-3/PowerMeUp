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
          <h1>Which of the following hygenic appliances do you use? </h1>
        </Col>
      </Row>
      <Row>
        <ToggleButtonGroup
          orientation="vertical"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="hair dryer" aria-label="hair dryer">
            Hair Dryer
          </ToggleButton>
          <ToggleButton value="electric shaver" aria-label="electric shaver">
            Electric Shaver
          </ToggleButton>
          <ToggleButton value="electric toothbrush" aria-label="electric toothbrush">
            Electric Toothbrush
          </ToggleButton>
 
        </ToggleButtonGroup>
      </Row>
      <Row>
        <Col>
        <NavLink to="/results">
          <Button>Submit</Button>
        </NavLink>
        </Col>
      </Row>
    </Stack>
  );
}
