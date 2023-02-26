import roseball from "img/Group.svg"
import social from "img/Group 5041.svg"
import mrgreen from "img/Group 80.svg"
import yellowball from "img/Group (1).svg"
import { Container, List, Social, Roseball, Greenball, Yellowball } from './Footer.styled';

export const Footer = () => {
return (
  <Container>
    <List>
      <Roseball><img src={roseball} alt="homePhoto" /></Roseball>
      <Social><img src={social} alt="homePhoto" /></Social>
      <Greenball><img src={mrgreen} alt="homePhoto" /></Greenball>
      <Yellowball><img src={yellowball} alt="homePhoto" /></Yellowball>
    </List>
  </Container>
)
}

export default Footer;