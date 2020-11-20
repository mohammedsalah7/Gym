import React from "react";
import { Container, Nav, Logo, All, Items, Link, Span } from "./style.js";

export default function TopNav() {
  return (
    <Container>
      <Nav>
        <Logo>
          Training<Span> Studio</Span>
        </Logo>
        <All>
          <Items>
            <Link href="#top">Home</Link>
          </Items>
          <Items>
            <Link href="#A">About</Link>
          </Items>
          <Items>
            <Link href="#our-classes">Classes</Link>
          </Items>
          <Items>
            <Link href="#schedule">Schedules</Link>
          </Items>
          <Items>
            <Link href="#contact-us">Contact</Link>
          </Items>
          <Items>
            <Link href="#1">Sign Up</Link>
          </Items>
        </All>
      </Nav>
    </Container>
  );
}
