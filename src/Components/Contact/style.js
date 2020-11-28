import styled from "styled-components";
import contact from "../../images/contact-bg.jpg";
export const Container = styled.div`
  margin-top: 140px;
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid red; */
`;
export const Left = styled.section`
  width: 50%;
`;
export const Right = styled.section`
  width: 50%;
  border: 1px solid black;
  padding: 80px;
  background-image: url(${contact});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ArticleLeft = styled.article``;
export const ArticleRight = styled.article`
  /* padding: 40px; */
  border-radius: 5px;
`;
export const Form = styled.form`
  background-color: #fff;
  padding: 40px;
  border-radius: 5px;
  /* border: 1px solid red; */
`;
export const Btn = styled.button`
  display: inline-block;
  font-size: 13px;
  padding: 11px 17px;
  background-color: #ed563b;
  color: #fff;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
  transition: all 0.3s;
  border: none;
  outline: none;
  margin-top: -8px;
`;
export const Input = styled.input`
  color: #7a7a7a;
  font-size: 13px;
  border: 1px solid #ddd;
  background-color: #fff;
  width: 100%;
  height: 40px;
  outline: none;
  line-height: 40px;
  padding: 0px 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-bottom: 30px;
`;
export const InputName = styled.input`
  color: #7a7a7a;
  font-size: 13px;
  border: 1px solid #ddd;
  background-color: #fff;
  width: 47%;
  height: 40px;
  outline: none;
  line-height: 40px;
  padding: 0px 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-bottom: 30px;
  margin-right: 12px;
`;
export const InputEmail = styled.input`
  color: #7a7a7a;
  font-size: 13px;
  border: 1px solid #ddd;
  background-color: #fff;
  width: 47%;
  height: 40px;
  outline: none;
  line-height: 40px;
  padding: 0px 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-bottom: 30px;
  margin-left: 13px;
`;

export const TextArea = styled.textarea`
  color: #7a7a7a;
  font-size: 13px;
  border: 1px solid #ddd;
  background-color: #fff;
  width: 100%;
  height: 150px;
  resize: none;
  outline: none;
  line-height: 40px;
  padding: 0px 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-bottom: 30px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0px;
  /* border: 1px solid red; */
  width: 100%;
`;
export const FooterHeader = styled.p`
  color: #232d39;
  font-size: 13px;
`;
export const Link = styled.a`
  cursor: pointer;
  color: #ed563b;
  &:hover {
    color: #ed563b;
  }
`;
