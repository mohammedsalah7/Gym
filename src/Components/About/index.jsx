import React from "react";
import waves from "../../images/line-dec.png";
import incon from "../../images/features-first-icon.png";
import * as A from "./style.js";
export default function About() {
  return (
    <A.Container id="about">
      <A.Heading>
        <A.H2>
          Choose <A.Span>Program</A.Span>
        </A.H2>
        <A.Image src={waves} alt="waves" />
        <A.Parghraph>
          Training Studio is free CSS template for gyms and fitness centers. You
          are allowed to use this layout for your business website.
        </A.Parghraph>
      </A.Heading>
      <A.Section>
        <A.Left>
          <A.Items>
            <A.List>
              <A.Part>
                <A.Icon src={incon} alt="First One" />
              </A.Part>
              <A.Part>
                <A.H4>Basic Fitness</A.H4>
                <A.Info>
                  Please do not re-distribute this template ZIP file on any
                  template collection website. This is not allowed.
                </A.Info>
                <A.Ancor href="#s">Discover More</A.Ancor>
              </A.Part>
            </A.List>
            <A.List>
              <A.Part>
                <A.Icon src={incon} alt="First One" />
              </A.Part>
              <A.Part>
                <A.H4>New Gym Training</A.H4>
                <A.Info>
                  If you wish to support TemplateMo website via PayPal, please
                  feel free to contact us. We appreciate it a lot.
                </A.Info>
                <A.Ancor href="#s">Discover More</A.Ancor>
              </A.Part>
            </A.List>
            <A.List>
              <A.Part>
                <A.Icon src={incon} alt="First One" />
              </A.Part>
              <A.Part>
                <A.H4>Basic Muscle Course</A.H4>
                <A.Info>
                  Credit goes to{" "}
                  <A.SubLink href="https://www.pexels.com/" target="_blank">
                    Pexels website{" "}
                  </A.SubLink>{" "}
                  for images and video background used in this HTML template.
                </A.Info>
                <A.Ancor href="#s">Discover More</A.Ancor>
              </A.Part>
            </A.List>
          </A.Items>
        </A.Left>
        <A.Right>
          <A.Items>
            <A.List>
              <A.Part>
                <A.Icon src={incon} alt="First One" />
              </A.Part>
              <A.Part>
                <A.H4>Advanced Muscle Course</A.H4>
                <A.Info>
                  You may want to browse through{" "}
                  <A.SubLink href="https://templatemo.com/tag/digital-marketing">
                    {" "}
                    Digital Marketing{" "}
                  </A.SubLink>
                  or{" "}
                  <A.SubLink href="https://templatemo.com/tag/corporate">
                    Corporate{" "}
                  </A.SubLink>
                  HTML CSS templates on our website.
                </A.Info>
                <A.Ancor href="#s">Discover More</A.Ancor>
              </A.Part>
            </A.List>
            <A.List>
              <A.Part>
                <A.Icon src={incon} alt="First One" />
              </A.Part>
              <A.Part>
                <A.H4>Yoga Training</A.H4>
                <A.Info>
                  This template is built on Bootstrap v4.3.1 framework. It is
                  easy to adapt the columns and sections.
                </A.Info>
                <A.Ancor href="#s">Discover More</A.Ancor>
              </A.Part>
            </A.List>
            <A.List>
              <A.Part>
                <A.Icon src={incon} alt="First One" />
              </A.Part>
              <A.Part>
                <A.H4>Body Building Course</A.H4>
                <A.Info>
                  Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                  nisi. Integer nibh sapien, vehicula et auctor.
                </A.Info>
                <A.Ancor href="#s">Discover More</A.Ancor>
              </A.Part>
            </A.List>
          </A.Items>
        </A.Right>
      </A.Section>
      <A.Banner>
        <A.HeadBanner>
          Don’t <A.SpanBanner>think</A.SpanBanner>, begin{" "}
          <A.SpanBanner>today</A.SpanBanner>!
        </A.HeadBanner>
        <A.InfoBanner>
          Ut consectetur, metus sit amet aliquet placerat, enim est ultricies
          ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a
          nisi luctus imperdiet.
        </A.InfoBanner>

        <A.BtnLinkBanner to="/signup">Become a member</A.BtnLinkBanner>
      </A.Banner>
    </A.Container>
  );
}
