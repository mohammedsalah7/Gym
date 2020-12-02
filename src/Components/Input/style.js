import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid red; */
  position: relative;
  margin-top: 10px;
  width: 750px;
  top: 60px;
  left: 50px;
  height: 60px;
  /* .error {
    border-color: red;
    /* background-color: red; */
  /* } */
`;

export const Inputs = styled.input`
  position: relative;
  width: 426px;
  height: 40px;
  /* left: 793px; */
  /* top: 360px; */
  border: 1px solid #8692a6;
  box-sizing: border-box;
  border-radius: 6px;
  padding-left: 30px;
  outline: none;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  width: 119px;
  font-family: "Inter";
  font-size: 16px;
  line-height: 40px;
  align-items: center;
  color: #f8f8f8;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  &:after {
    content: "${(props) => props.errorMs}";
    display: block;
    position: absolute;
    bottom: 5px;
    /* top: -1px; */
    left: 120px;
    width: 250px;
    height: 20px;
    color: red;
    /* background-color: blue; */
  }
`;

export const Error = styled.div`
  /* border: 1px solid yellow; */
  width: 220px;
  height: 20px;
  position: relative;
  top: 45px;
  left: -400px;
  color: red;
  font-size: 12px;
`;
