import FeedbackForm from "./FeedbackForm";
import Footer from "./Footer";
import { Component } from "react";
import yellowball2 from 'img/Group (2).svg';
import captura from 'img/map.png';
import {Captura} from './App.styled';
import { Yellowball3 } from "./App.styled";
import yellowball3 from 'img/Group (3).svg';
import { Roseball } from "./App.styled";
import roseball from 'img/Group (4).svg';
import {Container} from "./App.styled"

export class App extends Component {

  formSubmitHandler = data => {
      console.log(data);
  };

  render() {
    return (
      <Container>
      <img src={yellowball2} alt="homePhoto" />
      <Captura><img src={captura} alt="homePhoto" /></Captura>
      <Yellowball3 src={yellowball3} alt="homePhoto" />
      <Roseball src={roseball} alt="homePhoto" />
      <FeedbackForm onSubmit={this.formSubmitHandler}/>
      <Footer/>
      </Container>
    );
  }
  
};
