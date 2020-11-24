import React from "react";
import waves from "../../images/line-dec.png";
import icon1 from "../../images/training-image-01.jpg";
import icon2 from "../../images/training-image-02.jpg";
import icon3 from "../../images/training-image-03.jpg";
import icon4 from "../../images/training-image-04.jpg";
import tabs from "../../images/tabs-first-icon.png";

// import "./style.css";
import {
  Container,
  Heading,
  H2,
  Parghraph,
  Image,
  Span,
  List,
  Items,
  ImageLink,
  Link,
  Section,
  Artical,
  H4,
  Info,
  Btn,
  ImgTab,
  LinkTap,
  TopSection,
} from "./style";
export default function Classes() {
  return (
    <Container>
      <Heading>
        <H2>
          Our <Span>Classes</Span>
        </H2>
        <Image src={waves} alt="waves" />
        <Parghraph>
          Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
          viverra ipsum dolor, ultricies fermentum massa consequat eu.
        </Parghraph>
      </Heading>
      <TopSection>
        <Items>
          <List>
            <Link href="#tabs-1">
              <ImageLink src={tabs} alt="" />
              First Training Class
            </Link>
          </List>
          <List>
            <Link href="#tabs-2">
              <ImageLink src={tabs} alt="" />
              Second Training Class
            </Link>
          </List>
          <List>
            <Link href="#tabs-3">
              <ImageLink src={tabs} alt="" />
              Third Training Class
            </Link>
          </List>
          <List>
            <Link href="#tabs-4">
              <ImageLink src={tabs} alt="" />
              Fourth Training Class
            </Link>
          </List>
          {/* <div class="main-rounded-button"> */}
          <Btn href="#1">View All Schedules</Btn>
          {/* </div> */}
        </Items>

        <Section class="tabs-content">
          <Artical id="tabs-1">
            <ImgTab src={icon1} alt="First Class" />
            <H4>First Training Class</H4>
            <Info>
              Phasellus convallis mauris sed elementum vulputate. Donec posuere
              leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed
              vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia
              gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut,
              accumsan diam.
            </Info>
            {/* <div class="main-button"> */}
            <LinkTap href="#1">View Schedule</LinkTap>
            {/* </div> */}
          </Artical>
        </Section>
        <Section class="tabs-content">
          <Artical id="tabs-1">
            <ImgTab src={icon2} alt="Scoend Class" />
            <H4>Second Training Class</H4>
            <Info>
              Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac
              pulvinar quam tortor a velit. Praesent ultrices erat ante, in
              ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper
              at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </Info>
            {/* <div class="main-button"> */}
            <LinkTap href="#1">View Schedule</LinkTap>
            {/* </div> */}
          </Artical>
        </Section>
        <Section class="tabs-content">
          <Artical id="tabs-1">
            <ImgTab src={icon3} alt="Scoend Class" />
            <H4>Second Training Class</H4>
            <Info>
              Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac
              pulvinar quam tortor a velit. Praesent ultrices erat ante, in
              ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper
              at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </Info>
            {/* <div class="main-button"> */}
            <LinkTap href="#1">View Schedule</LinkTap>
            {/* </div> */}
          </Artical>
        </Section>
        <Section class="tabs-content">
          <Artical id="tabs-1">
            <ImgTab src={icon4} alt="Scoend Class" />
            <H4>Second Training Class</H4>
            <Info>
              Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac
              pulvinar quam tortor a velit. Praesent ultrices erat ante, in
              ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper
              at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </Info>
            {/* <div class="main-button"> */}
            <LinkTap href="#1">View Schedule</LinkTap>
            {/* </div> */}
          </Artical>
        </Section>
        {/* <article id="tabs-2">
          <img src={icon2} alt="Second Training" />
          <h4>Second Training Class</h4>
          <p>
            Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac
            pulvinar quam tortor a velit. Praesent ultrices erat ante, in
            ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at
            mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <div class="main-button">
            <a href="#1">View Schedule</a>
          </div>
        </article>
        <article id="tabs-3">
          <img src={icon3} alt="Third Class" />
          <h4>Third Training Class</h4>
          <p>
            Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id
            auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus
            porta, nisi tortor vulputate sapien, id scelerisque felis magna id
            felis. Proin neque metus, pellentesque pharetra semper vel, accumsan
            a neque.
          </p>
          <div class="main-button">
            <a href="#1">View Schedule</a>
          </div>
        </article>
        <article id="tabs-4">
          <img src={icon4} alt="Fourth Training" />
          <h4>Fourth Training Class</h4>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Aenean ultrices elementum odio ac tempus.
            Etiam eleifend orci lectus, eget venenatis ipsum commodo et.
          </p>
          <div class="main-button">
            <a href="#1">View Schedule</a>
          </div>
        </article> */}
      </TopSection>
    </Container>
  );
}
