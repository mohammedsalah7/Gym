import * as N from "./style.js";

export default function TopNav() {
  return (
    <N.Container>
      <N.Nav>
        <N.Logo>
          Training<N.Span> Studio</N.Span>
        </N.Logo>
        <N.All>
          <N.Items>
            <N.LinkNav exact to="/">
              Home
            </N.LinkNav>
          </N.Items>
          <N.Items>
            <N.Ancor href="#about">About</N.Ancor>
          </N.Items>
          <N.Items>
            <N.Ancor href="#classes">Classes</N.Ancor>
          </N.Items>
          <N.Items>
            <N.Ancor href="#schedules">Schedules</N.Ancor>
          </N.Items>
          <N.Items>
            <N.Ancor href="#contact">Contact</N.Ancor>
          </N.Items>
          <N.Items>
            <N.LinkNav to="/signup">Sign Up</N.LinkNav>
          </N.Items>
        </N.All>
      </N.Nav>
    </N.Container>
  );
}
