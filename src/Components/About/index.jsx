import React from "react";
import waves from "../../images/line-dec.png";
import incon from "../../images/features-first-icon.png";
// import scoend from "../../images/line-dec.png";
// import thered from "../../images/line-dec.png";
// import fourth from "../../images/line-dec.png";
// import sixth from "../../images/line-dec.png";
// import fiveth from "../../images/line-dec.png";
import {
  Container,
  Heading,
  H2,
  Image,
  Parghraph,
  Span,
  Section,
  Left,
  Icon,
  Right,
  Part,
  Items,
  List,
  Info,
  H4,
  Link,
  Banner,
  P,
  Head2,
  Span2,
  BtnLink,
} from "./style.js";
export default function About() {
  return (
    <Container>
      <Heading>
        <H2>
          Choose <Span>Program</Span>
        </H2>
        <Image src={waves} alt="waves" />
        <Parghraph>
          Training Studio is free CSS template for gyms and fitness centers. You
          are allowed to use this layout for your business website.
        </Parghraph>
      </Heading>
      <Section>
        <Left>
          <Items>
            <List>
              <Part>
                <Icon src={incon} alt="First One" />
              </Part>
              <Part>
                <H4>Basic Fitness</H4>
                <Info>
                  Please do not re-distribute this template ZIP file on any
                  template collection website. This is not allowed.
                </Info>
                <Link href="#s">Discover More</Link>
              </Part>
            </List>
            <List>
              <Part>
                <Icon src={incon} alt="First One" />
              </Part>
              <Part>
                <H4>New Gym Training</H4>
                <Info>
                  If you wish to support TemplateMo website via PayPal, please
                  feel free to contact us. We appreciate it a lot.
                </Info>
                <Link href="#s">Discover More</Link>
              </Part>
            </List>
            <List>
              <Part>
                <Icon src={incon} alt="First One" />
              </Part>
              <Part>
                <H4>Basic Muscle Course</H4>
                <Info>
                  Credit goes to Pexels website for images and video background
                  used in this HTML template.
                </Info>
                <Link href="#s">Discover More</Link>
              </Part>
            </List>
          </Items>
        </Left>
        <Right>
          <Items>
            <List>
              <Part>
                <Icon src={incon} alt="First One" />
              </Part>
              <Part>
                <H4>Advanced Muscle Course</H4>
                <Info>
                  You may want to browse through Digital Marketing or Corporate
                  HTML CSS templates on our website.
                </Info>
                <Link href="#s">Discover More</Link>
              </Part>
            </List>
            <List>
              <Part>
                <Icon src={incon} alt="First One" />
              </Part>
              <Part>
                <H4>Yoga Training</H4>
                <Info>
                  This template is built on Bootstrap v4.3.1 framework. It is
                  easy to adapt the columns and sections.
                </Info>
                <Link href="#s">Discover More</Link>
              </Part>
            </List>
            <List>
              <Part>
                <Icon src={incon} alt="First One" />
              </Part>
              <Part>
                <H4>Body Building Course</H4>
                <Info>
                  Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                  nisi. Integer nibh sapien, vehicula et auctor.
                </Info>
                <Link href="#s">Discover More</Link>
              </Part>
            </List>
          </Items>
        </Right>
      </Section>
      <Banner>
        <Head2>
          Don’t <Span2>think</Span2>, begin <Span2>today</Span2>!
        </Head2>
        <P>
          Ut consectetur, metus sit amet aliquet placerat, enim est ultricies
          ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a
          nisi luctus imperdiet.
        </P>

        <BtnLink href="#our-classes">Become a member</BtnLink>
      </Banner>
    </Container>
  );
}
