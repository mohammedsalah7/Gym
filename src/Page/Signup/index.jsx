import React from "react";
import Forms from "./form";
import Back from "../../Components/Back";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";
export default function Signup() {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <>
      <S.Refresh onClick={refreshPage}>
        {" "}
        <S.Icon icon={faSync} />
      </S.Refresh>
      <Back />
      <Forms />
    </>
  );
}
