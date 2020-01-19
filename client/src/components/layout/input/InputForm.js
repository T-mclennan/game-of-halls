import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

export class InputForm extends Component {
  state = {
    temperature: "",
    room: "",
    building: "",
    notes: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}> Student Input Form</h2>
        <h4>Feedback helps us guage the efficacy of our energy usage:</h4>
        <div
          className="main "
          style={{ scrollBehavior: "auto", marginTop: "1.2rem" }}
        >
          <Form onSubmit={this.onSubmit}>
            <FormGroup className="dropdown">
              <Label for="temperature">Temperature</Label>
              <Input
                type="select"
                name="temperature"
                id="temperature"
                onChange={this.onChange}
              >
                <option>Choose One</option>
                <option>Very Hot</option>
                <option>Hot</option>
                <option>Warm</option>
                <option>Chilly</option>
                <option>Cold</option>
                <option>Very Cold</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="floor">Floor</Label>
              <Input
                type="select"
                name="floor"
                id="floor"
                onChange={this.onChange}
              >
                <option>Choose One</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="room">Room Number</Label>
              <Input type="text" name="room" id="room" placeholder="" />
            </FormGroup>

            <FormGroup>
              <Label for="notes">Notes</Label>
              <Input type="textarea" name="notes" id="notes" />
            </FormGroup>

            {/* <FormGroup row></FormGroup> */}
            {/* <FormGroup row> */}
            <Button style={buttonStyle} block>
              Submit Feedback
            </Button>
            {/* </FormGroup> */}
          </Form>
        </div>
      </div>
    );
  }
}

const buttonStyle = {
  //metalic:
  background: "#0F2027",
  background: "-webkit-linear-gradient(45deg, #0F2027 , #203A43,#2C5364)",
  background: "linear-gradient(45deg,  #203A43, #0F2027,#2C5364)",
  padding: "0.5rem",
  marginTop: "1.5rem",
  fontSize: "1.3rem",
  borderWidth: "2px",
  fontWeight: "bold",
  boxShadow: "0 1px 0.5px"
  // boxShadow: "0 19px 18px"
};

export default InputForm;
