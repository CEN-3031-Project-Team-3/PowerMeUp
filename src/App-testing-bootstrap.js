 import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
// import Form from "react-bootstrap/Form";
import Form from './components/Form'
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

//import "./App.css";

const options = ["option 1", "option 2", "option 3", "option 4"];

function App() {
  return (
    // <>
    //   <Stack gap={2} className="col-md-5 mx-auto">
    //     <h1>Question to ask user ?</h1>
    //     <br />
    //     <Button>Option 1</Button>
    //     <Button>Option 2</Button>
    //     <Button>Option 3</Button>
    //     <Button>Option 4</Button>
    //     <Button>Option 5</Button>
    //   </Stack>
    // </>

    // <Stack direction="horizontal" gap={3}>
    //   <Form.Control className="me-auto" placeholder="Add your item here..." />
    //   <Button variant="secondary">Submit</Button>
    //   <div className="vr" />
    //   <Button variant="outline-danger">Reset</Button>
    // </Stack>

    // <Container>
    //   <Row>
    //     <Button>Hello</Button>
    //     <Button>Yolo</Button>
    //     <Button>Swag</Button>
    //   </Row>
    // </Container>

    // <>
    //   <Button variant="primary">Primary</Button>{' '}
    //   <Button variant="secondary">Secondary</Button>{' '}
    //   <Button variant="success">Success</Button>{' '}
    //   <Button variant="warning">Warning</Button>{' '}
    //   <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
    //   <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
    //   <Button variant="link">Link</Button>
    // </>

    // <>
    //   <Button variant="outline-primary">Primary</Button>{' '}
    //   <Button variant="outline-secondary">Secondary</Button>{' '}
    //   <Button variant="outline-success">Success</Button>{' '}
    //   <Button variant="outline-warning">Warning</Button>{' '}
    //   <Button variant="outline-danger">Danger</Button>{' '}
    //   <Button variant="outline-info">Info</Button>{' '}
    //   <Button variant="outline-light">Light</Button>{' '}
    //   <Button variant="outline-dark">Dark</Button>
    // </>

    // <>
    //   <div className="mb-2">
    //     <Button variant="primary" size="lg">
    //       Large button
    //     </Button>{' '}
    //     <Button variant="secondary" size="lg">
    //       Large button
    //     </Button>
    //   </div>
    //   <div>
    //     <Button variant="primary" size="sm">
    //       Small button
    //     </Button>{' '}
    //     <Button variant="secondary" size="sm">
    //       Small button
    //     </Button>
    //   </div>
    // </>

    // <div className="d-grid gap-2">
    //   <Button variant="primary" size="lg">
    //     Block level button
    //   </Button>
    //   <Button variant="secondary" size="lg">
    //     Block level button
    //   </Button>
    // </div>

    // <>
    //   <h1>Some question ?</h1>
    //   <ToggleButtonGroup orientation="vertical" type="checkbox">
    //       <ToggleButton id="tbg-check-1" value={1}>
    //         Option 1{" "}
    //       </ToggleButton>{" "}
    //       <ToggleButton id="tbg-check-2" value={2}>
    //         Option 2{" "}
    //       </ToggleButton>{" "}
    //       <ToggleButton id="tbg-check-3" value={3}>
    //         Option 3{" "}
    //       </ToggleButton>{" "}
    //       </ToggleButtonGroup>
    // </>

    // <div><Form /></div>

    <div>
      <>
        <h1>Vertical ?</h1>
        <ToggleButtonGroup orientation="vertical" type="checkbox">
          <ToggleButton id="tbg-check-1" value={1}>
            Option 1{' '}
          </ToggleButton>{' '}
          <ToggleButton id="tbg-check-2" value={2}>
            Option 2{' '}
          </ToggleButton>{' '}
          <ToggleButton id="tbg-check-3" value={3}>
            Option 3{' '}
          </ToggleButton>{' '}
        </ToggleButtonGroup>
      </>

      <>
        <h1>Horizental?</h1>
        <ToggleButtonGroup orientation="horizental" type="checkbox">
          <ToggleButton id="tbg-check-1" value={1}>
            Option 1{' '}
          </ToggleButton>{' '}
          <ToggleButton id="tbg-check-2" value={2}>
            Option 2{' '}
          </ToggleButton>{' '}
          <ToggleButton id="tbg-check-3" value={3}>
            Option 3{' '}
          </ToggleButton>{' '}
        </ToggleButtonGroup>
      </>
    </div>

  );
}

export default App;
