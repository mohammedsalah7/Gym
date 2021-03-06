import styled from "styled-components";
import banner from "../../images/cta-bg.jpg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const Heading = styled.section`
  width: 620px;
  text-align: center;
  margin: 100px auto;
`;
export const H2 = styled.h2`
  position: relative;
  padding: 10px;
  font-size: 28px;
  font-weight: 800;
  color: #232d39;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 0px;
  margin-bottom: 0px;
`;
export const Parghraph = styled.p`
  margin-left: 60px;
  font-size: 14px;
  line-height: 25px;
  color: #7a7a7a;
  width: 520px;
`;
export const Image = styled.img`
  position: relative;
  margin: 20px auto;
  vertical-align: middle;
  text-align: center;
`;
export const Span = styled.span`
  font-style: normal;
  color: #ed563b;
`;
export const Section = styled.section`
  margin-left: 50px;
  font-style: normal;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;
export const Left = styled.section`
  font-style: normal;
  width: 50%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;
export const Right = styled.section`
  font-style: normal;
  width: 590px;
  margin-right: 0;
  overflow: hidden;
`;
export const Icon = styled.img`
  font-style: normal;
  margin-right: 20px;
`;
export const Part = styled.section`
  font-style: normal;
  margin-left: 10px;
  margin-top: 10px;
  overflow: hidden;
`;
export const Items = styled.ul`
  font-style: normal;
`;
export const List = styled.li`
  font-style: normal;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;
`;
export const Info = styled.p`
  font-size: 14px;
  line-height: 25px;
  color: #7a7a7a;
  width: 420px;
`;
export const H4 = styled.h4`
  margin-top: 0px;
  margin-bottom: 7px;
  letter-spacing: 0.25px;
  -webkit-letter-spacing: 0.25px;
  color: #232d39;
  font-size: 19px;
  font-weight: 600;
  text-transform: capitalize;
`;
export const Ancor = styled.a`
  margin-top: 7px;
  display: inline-block;
  font-size: 13px;
  text-transform: uppercase;
  color: #ed563b;
  font-weight: 500;
  text-decoration: none;
`;

export const Banner = styled.div`
  margin-top: 60px;
  background-image: url(${banner});
  padding: 120px 0px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
`;
export const InfoBanner = styled.p`
  font-size: 16px;
  color: #fff;
  margin: 15px auto;
  width: 940px;
  text-align: center;
`;
export const HeadBanner = styled.h2`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 800;
  color: #fff;
  letter-spacing: 1px;
`;
export const SpanBanner = styled.span`
  font-style: normal;
  color: #ed563b;
`;
export const BtnLinkBanner = styled(Link)`
  display: inline-block;
  font-size: 15px;
  padding: 12px 20px;
  background-color: #ed563b;
  color: #fff;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
`;

export const SubLink = styled.a`
  text-decoration: none;
  color: #007bff;
  cursor: pointer;
`;
