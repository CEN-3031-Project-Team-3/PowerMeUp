import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material/";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';

export default function Personal() {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <Stack gap={5}>
      <Row>
        <Col>
          <h1>Which of the following personal appliances do you use? </h1>
        </Col>
      </Row>
      <Row>
        <ToggleButtonGroup
          orientation="vertical"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="refrigerator" aria-label="refrigerator">
            Refrigerator
          </ToggleButton>
          <ToggleButton
            value="dishwashing machine"
            aria-label="diswashing machine"
          >
            Dishwashing Machine
          </ToggleButton>
          <ToggleButton value="oven" aria-label="oven">
            Oven
          </ToggleButton>
          <ToggleButton value="toaster" aria-label="toaster">
            Toaster
          </ToggleButton>
        </ToggleButtonGroup>
      </Row>
      <Row>
        <Col>
        <NavLink to="/">Entertainment </NavLink>
        </Col>
      </Row>
    </Stack>
  );
}
