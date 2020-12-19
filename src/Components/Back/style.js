import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  margin-top: 60px;
  margin-left: 380px;
  flex-wrap: wrap;
  position: absolute;
`;

export const BtnBack = styled.button`
  text-decoration: none;
  position: relative;
  border: none;
  width: 12px;
  background-color: white;
  height: 12px;
`;
export const WordBack = styled.p`
  position: relative;
  top: -18px;
  left: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  margin-left: 3px;
  color: #232d39;
  cursor: pointer; ;
`;

export const Icon = styled(FontAwesomeIcon)`
  position: relative;
  font-size: 10px;
  margin-top: 5px;
  cursor: pointer;
  color: #232d39;
  right: 3px; ;
`;
