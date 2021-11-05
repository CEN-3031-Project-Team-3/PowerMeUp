import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material/";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';
import { useState } from 'react'

const Entertainment = () => {
  const [inputs, setInputs] = useState();

  const handleInput = (event, newInputs) => {
    setInputs(newInputs);
    
    
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
          value={inputs}
          onChange = {handleInput}
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
        <NavLink to="/kitchen">
          <Button onClick={() => {
            console.log(inputs)
          }}>
          Next
          </Button>
        </NavLink>
        </Col>
      </Row>
    </Stack>
  );
}

export default Entertainment
