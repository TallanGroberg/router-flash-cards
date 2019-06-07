import React from 'react';
import { Form, } from "semantic-ui-react";

class MakeCard extends React.Component {
    state = { front: "", back: "", };

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value, })
      console.log("handleChange")
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.add(this.state);
      this.setState({ front: "", back: "", });
    }




render() {
  return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
        fluid
        label="front"
        placeholder="front"
        name="front"
        value={this.state.front}
        onChange={this.handleChange}
        />

      <Form.Input
        fluid
        label="Back"
        placeholder="back"
        name="back"
        value={this.state.back}
        onChange={this.handleChange}
       />

         <Form.Button color="purple">submit</Form.Button>
      </Form.Group>

     </Form>
    )
  }
}

export default MakeCard;
