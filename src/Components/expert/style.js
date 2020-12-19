import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 600px;
  overflow: hidden;
  margin-top: -30px;
  margin-bottom: 80px;
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
`;
export const Span = styled.span`
  font-style: normal;
  color: #ed563b;
  width: 100px;
`;
export const Span2 = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #ed563b;
  display: inline-block;
  margin-top: 25px;
  margin-bottom: 10px;
  width: 150px;
`;

export const Items = styled.ul`
  display: flex;
  position: relative;
  top: 2px;
  width: 200px;
  flex-wrap: wrap;
`;
export const List = styled.li`
  list-style: none;
  margin-right: 12px;
`;
export const Link = styled.a`
  color: #232d39;
  transition: all 0.3s;
  &:hover {
    color: #ed563b;
  }
`;

export const Section = styled.section`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  width: 350px;
  height: 580px;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
`;
export const Artical = styled.article`
  width: 290px;
  font-style: normal;
  color: #ed563b;
  overflow: hidden;
`;

export const H4 = styled.h4`
  width: 200px;
  font-size: 19px;
  font-weight: 600;
  color: #232d39;
  letter-spacing: 0.5px;
  margin-bottom: 18px;
`;
export const Info = styled.p`
  font-size: 14px;
  color: #7a7a7a;
  margin-bottom: 20px;
  width: 280px;
`;
export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 600px;
`;
