import React, { useState, useEffect } from "react";
import Input from "../../Components/Input";
import { Form, Container, H2, Span, Title } from "./style";
import { RegisterBtn, LogInBtn } from "../../Components/Button";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
const initState = {
  email: "",
  password: "",
  error: "",
};
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function Forms() {
  const history = useHistory();
  const [state, setState] = useState(initState);
  const [errors, setErrors] = useState(initState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { email, password, error } = state;

  useEffect(() => {
    let mount = true;
    if (isSubmitted) {
      schema
        .validate(state, { abortEarly: false })
        .then(() => {
          if (mount) {
            setErrors({
              email: "",
              password: "",
            });
          }
        })
        .catch((err) => {
          const newErrors = {};
          err.inner.forEach(({ path, message }) => {
            newErrors[path] = message;
          });

          if (mount) {
            setErrors({ ...initState, ...newErrors });
          }
        });
    }
    return () => {
      mount = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitted, email, password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!error) {
      axios
        .post("https://fake-api-ahmed.herokuapp.com/v1/auth/login", {
          email,
          password,
        })
        .then((res) => {
          history.push("/");
        })
        .catch((err) => {
          let error = err.response.data.error;
          if (error.includes("duplicate")) {
            error = "Email already exists";
          }
          setState({ error: error });
        });
    }
  };

  return (
    <div>
      <Container>
        <H2>
          Training <Span>Studio</Span>
        </H2>
      </Container>
      <Form className="contanier-form" onSubmit={handleSubmit}>
        <Title>Login Page</Title>
        <Input
          handleChange={handleChange}
          id="email"
          name="email"
          type="email"
          placeholder="Enter Your Email"
          value={email}
          label="Email address"
          error={errors.email}
        />

        <Input
          handleChange={handleChange}
          name="password"
          type="password"
          placeholder="Enter Your password"
          value={password}
          label="Enter password"
          id="password"
          error={errors.password}
        />
        {/* {error && <span>{error}</span>} */}

        <LogInBtn type=" submit" className="login-btn-login">
          {" "}
          Log In
        </LogInBtn>
        <Link to="/signup" className="link-page">
          <RegisterBtn className="register-btn-login">Register</RegisterBtn>
        </Link>
      </Form>
    </div>
  );
}

export default Forms;
