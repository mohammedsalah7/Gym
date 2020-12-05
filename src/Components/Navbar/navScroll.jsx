import {
  Container,
  Nav,
  Logo,
  All,
  Items,
  LinkNav,
  Span,
  Ancor,
} from "./styleNavScroll.js";
import "../../App.css";

export default function NavScroll() {
  return (
    <Container>
      <Nav>
        <Logo>
          Training<Span> Studio</Span>
        </Logo>
        <All>
          <Items>
            <LinkNav exact to="/">
              Home
            </LinkNav>
          </Items>
          <Items>
            <Ancor href="#about">About</Ancor>
          </Items>
          <Items>
            <Ancor href="#classes">Classes</Ancor>
          </Items>
          <Items>
            <Ancor href="#schedules">Schedules</Ancor>
          </Items>
          <Items>
            <Ancor href="#contact">Contact</Ancor>
          </Items>
          <Items>
            <LinkNav to="/signup">Sign Up</LinkNav>
          </Items>
        </All>
      </Nav>
    </Container>
  );
}
