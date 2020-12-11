import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const Nav = styled.nav`
  width: 1140px;
  display: flex;
  justify-content: space-between;
  min-height: 80px;
  margin-right: 0;
  background-color: transparent;
  z-index: 999;
`;

export const Logo = styled.a`
  line-height: 80px;
  color: #fff;
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
  float: left;
  text-decoration: none;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
`;
export const Span = styled.span`
  font-style: normal;
  color: #ed563b;
  font-weight: 900;
`;
export const All = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  &:first-child {
  }
`;
export const Items = styled.li`
  list-style: none;
  text-transform: uppercase;
  padding-left: 20px;
  padding-right: 20px;
  .active {
    color: #ed563b;
  }

  &:last-child a {
    display: inline-block;
    font-size: 13px;
    padding: 11px 17px;
    background-color: #ed563b;
    color: #fff;
    text-align: center;
    font-weight: 400;
    letter-spacing: 0px;
    text-transform: uppercase;
    transition: all 0.3s;
    height: auto;
    line-height: 20px;
  }
`;
export const LinkNav = styled(NavLink)`
  display: block;
  font-weight: 500;
  border: transparent;
  color: #fff;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  font-size: 13px;
  height: 40px;
  line-height: 40px;
  letter-spacing: 1px;
  &:hover {
    color: #ed563b;
  }
`;

export const Ancor = styled.a`
  display: block;
  font-weight: 500;
  border: transparent;
  color: #fff;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  font-size: 13px;
  height: 40px;
  line-height: 40px;
  letter-spacing: 1px;
  &:hover {
    color: #ed563b;
  }
`;
