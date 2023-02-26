import TitleName from "components/Title/Title";
import { Component } from "react";
import {Field1, Field2, TextArea, Button} from './FeedbackForm.styled';


export class FeedbackForm extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  handleChange = e => {
    const { name, value} = e.currentTarget;
    this.setState({[name]:value,});
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
    name: '',
    email: '',
    message: ''})
  };

    render () {
      return(
        <div>
        <TitleName text="Reach out to us!"/>
        <form onSubmit={this.handleSubmit}>
            <Field1
              type="text"
              placeholder="Your name*"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Field2
              type="email"
              placeholder="Your e-mail*"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <TextArea name="message" value={this.state.message}
              onChange={this.handleChange} placeholder="Your message*" id="" cols="20" rows="5"></TextArea>
          <Button type="submit">Send message</Button>
        </form>
        </div>
      )
    }
  }


export default FeedbackForm;