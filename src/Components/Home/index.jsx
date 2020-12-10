import React from "react";
import gym from "../../images/gym-video.mp4";
import { Container, Links, Section, H6, H2, Span, Caption } from "./style.js";

export default function Bxs() {
  return (
    <Container>
      <video autoPlay="autoplay" muted loop="loop" id="bg-video">
        <source src={gym} type="video/mp4" />
      </video>
      <Section>
        <Caption>
          <H6>work harder, get stronger</H6>
          <H2>
            easy with our <Span>gym</Span>
          </H2>
          <Links to="/signup">Become a member</Links>
        </Caption>
      </Section>
    </Container>
  );
}
