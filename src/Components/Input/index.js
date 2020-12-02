import React from "react";
import { Container, Inputs, Label } from "./style.js";
function Input(props) {
  const { handleChange, name, type, value, label, placeholder, error } = props;
  return (
    <Container>
      <Label errorMs={error} htmlFor={name}>
        {label}
      </Label>
      <Inputs
        // className={error ? " error   " : ""}
        name={name}
        type={type}
        id={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {/* {error && <Error htmlFor={name}>{error}</Error>} */}
    </Container>
  );
}

export default Input;
