import * as React from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import { useHistory } from "react-router-dom";

function clickSubmit() {}

export default function Second() {
  let history = useHistory();
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const redirect = () => {
    history.push('/your-path')
  }

  return (
    <Stack gap={5}>
      <Row>
        <Col>
          <h1>Second? </h1>
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
          <Button onClick={}>submit</Button>
        </Col>
      </Row>
    </Stack>
  );
}
