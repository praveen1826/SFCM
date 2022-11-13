import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tot: 0,
      mean: 0,
      tot1: 0,
      numE: 0,
      clk: 0,
      numElements: 0,
      numArr: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.displayMean = this.displayMean.bind(this);
    this.clicked = this.clicked.bind(this);
    //this.displayInputs = this.displayInputs.bind(this);
    //this.calculateMean = this.calculateMean.bind(this);
    this.displayArray = this.displayArray.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value }, () => {
      console.log(this.state.value);
    });
  }
  calculateTotal() {
    this.setState(
      {
        numArr: this.state.numArr.concat(parseInt(this.state.value)),
      },
      () => {
        let total = 0;
        for (let i = 0; i < this.state.numArr.length; i++) {
          total = total + this.state.numArr[i];
        }
        this.setState(
          {
            tot1: total,
            numE: this.state.numArr.length,
          },
          () => {
            this.setState(
              {
                mean: this.state.tot1 / this.state.numE,
              },
              () => {
                console.log("mean", this.state.mean);
              }
            );
          }
        );
      }
    );
  }
  //calculateMean() {}
  displayMean() {
    this.calculateTotal();
  }

  clicked() {
    this.setState({
      clk: 1,
    });
  }

  displayArray() {
    const listItems = this.state.numArr.map((number) => (
      <p key={number.toString()}>{number}</p>
    ));
    if (this.state.clk == 1) {
      return (
        <div>
          <Alert className="mb-3 ms-3" variant="success" xs={4}>
            The Anonymous Inputs Are:
          </Alert>
          <Alert className="mb-3 ms-3" variant="success" xs={4}>
            {listItems}
          </Alert>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" className="mb-3">
          <Container className="ms-1">
            <Navbar.Brand href="#home">
              Sales Force Composite Method
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Row>
          <Col xs={5}>
            <Alert className="mb-3 ms-3" variant="primary" xs={4}>
              Team Members: Praveen , SanjayKumar
            </Alert>
          </Col>
        </Row>
        <Form>
          <Form.Group className="mb-3 ms-3">
            <Row>
              <Col xs={4}>
                <Form.Label>Enter The Vendor Name</Form.Label>
                <Form.Control type="text" placeholder="Enter The Vendor Name" />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3 ms-3">
            <Row>
              <Col xs={4}>
                <Form.Label>Enter The Number Of units Sold</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="Enter The Number Of units Sold"
                />
              </Col>
            </Row>
          </Form.Group>

          <Button
            className="mb-3 ms-3"
            variant="primary"
            value="Submit"
            onClick={this.displayMean}
          >
            Calculate
          </Button>
        </Form>
        <Row>
          <Col xs={5}>
            <Alert className="mb-3 ms-3" variant="primary" xs={4}>
              Optimal Value Of Production Is "{this.state.mean}" Based On
              Anonymous Inputs From "{this.state.numE}" Expert Opinions
            </Alert>
          </Col>
        </Row>
        <Button
          className="mb-3 ms-3"
          variant="primary"
          value="Submit"
          onClick={this.clicked}
        >
          Show Inputs
        </Button>
        {this.displayArray()}
      </div>
    );
  }
}

export default App;
