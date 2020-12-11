import * as NS from "./styleNavScroll.js";

export default function NavScroll() {
  return (
    <NS.Container>
      <NS.Nav>
        <NS.Logo>
          Training<NS.Span> Studio</NS.Span>
        </NS.Logo>
        <NS.All>
          <NS.Items>
            <NS.LinkNav exact to="/">
              Home
            </NS.LinkNav>
          </NS.Items>
          <NS.Items>
            <NS.Ancor href="#about">About</NS.Ancor>
          </NS.Items>
          <NS.Items>
            <NS.Ancor href="#classes">Classes</NS.Ancor>
          </NS.Items>
          <NS.Items>
            <NS.Ancor href="#schedules">Schedules</NS.Ancor>
          </NS.Items>
          <NS.Items>
            <NS.Ancor href="#contact">Contact</NS.Ancor>
          </NS.Items>
          <NS.Items>
            <NS.LinkNav to="/signup">Sign Up</NS.LinkNav>
          </NS.Items>
        </NS.All>
      </NS.Nav>
    </NS.Container>
  );
}
