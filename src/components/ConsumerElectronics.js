import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material/";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';

export default function ConsumerElectronics() {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <Stack gap={5}>
      <Row>
        <Col>
          <h1>Which of the following entertainment appliances do you use? </h1>
        </Col>
      </Row>
      <Row>
        <ToggleButtonGroup
          orientation="vertical"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="LED/LCD Television" aria-label="LED/LCD Television">
            LED/LCD Television
          </ToggleButton>
          <ToggleButton
            value="Surround Sound System"
            aria-label="Surround Sound System"
          >
            Surround Sound System
          </ToggleButton>
          <ToggleButton value="Blu-ray Player" aria-label="Blu-ray Player">
            Blu-ray Player
          </ToggleButton>
          <ToggleButton value="Playstation 4" aria-label="Playstation 4">
            Playstation 4
          </ToggleButton>
          <ToggleButton value="Xbox One" aria-label="Xbox One">
            Xbox One
          </ToggleButton>
          <ToggleButton value="Playstation 5" aria-label="Playstation 5">
            Playstation 5
          </ToggleButton>
          <ToggleButton value="Xbox Series X" aria-label="Xbox Series X">
            Xbox Series X
          </ToggleButton>
          <ToggleButton value="Chromebook" aria-label="Chromebook">
            Chromebook
          </ToggleButton>
          <ToggleButton value="Desktop Computer" aria-label="Desktop Computer">
            Desktop Computer
          </ToggleButton>
          <ToggleButton value="Laptop" aria-label="Laptop">
            Laptop
          </ToggleButton>
        </ToggleButtonGroup>
      </Row>
      <Row>
        <Col>
        <NavLink to="/Environmental">
          <Button>Next</Button>
        </NavLink>
        </Col>
      </Row>
    </Stack>
  );
}
