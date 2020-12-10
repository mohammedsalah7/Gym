import styled from "styled-components";
import {Link} from "react-router-dom"

export const Container = styled.div`
  position: relative;
`;

export const Section = styled.section`
  position: absolute;
  background-color: rgba(35, 45, 57, 0.8);
  top: 0;
  left: 0;
  bottom: 7px;
  min-width: 100%;
  min-height: 100vh;
  max-width: 100%;
  max-height: 100vh;
`;

export const Caption = styled.div`
  text-align: center;
  position: absolute;
  width: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const H6 = styled.h6`
  margin-top: 0px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.5px;
`;

export const H2 = styled.h2`
  margin-top: 17px;
  margin-bottom: 25px;
  font-size: 84px;
  text-transform: uppercase;
  font-weight: 800;
  color: #fff;
  letter-spacing: 1px;
`;

export const Span = styled.span`
  font-style: normal;
  color: #ed563b;
  font-weight: 900;
`;

export const Links = styled(Link)`
  display: inline-block;
  font-size: 15px;
  padding: 12px 20px;
  background-color: #ed563b;
  color: #fff;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
`;
