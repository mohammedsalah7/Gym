import React, { useState, useEffect, useContext } from "react";
import Input from "../../Components/Input";
import { LoginsContext } from "../../App";
import { Form, Container, H2, Span, Error, Title } from "./style";
import { RegisterBtn, LogInBtn } from "../../Components/Button";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
const initState = {
  email: "",
  userName: "",
  password: "",
  rePassword: "",
  birthDate: "",
  error: "",
};
const schema = yup.object().shape({
  email: yup.string().email().required(),
  userName: yup.string().required(),
  password: yup.string().required().min(9),
  birthDate: yup.string().required(),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});

function Forms() {
  const { dispatch } = useContext(LoginsContext);
  const history = useHistory();
  const [state, setState] = useState(initState);
  const [errors, setErrors] = useState(initState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { email, userName, password, rePassword, birthDate, error } = state;

  useEffect(() => {
    let mount = true;
    if (isSubmitted) {
      schema
        .validate(state, { abortEarly: false })
        .then(() => {
          if (mount) {
            setErrors({
              email: "",
              userName: "",
              password: "",
              rePassword: "",
              birthDate: "",
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
  }, [isSubmitted, email, userName, password, rePassword, birthDate]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!error) {
      axios
        .post("https://fake-api-ahmed.herokuapp.com/v1/auth/signup", {
          email,
          password,
        })
        .then((res) => {
          let { value } = e.target;
          value = state.userName;
          dispatch({ type: "signup", payload: value });
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
      <Form
        className="contanier-form"
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        data-netlify="true"
      >
        <Title>SignUp Page</Title>
        <input type="hidden" name="form-name" value="contact" />

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
          name="userName"
          type="text"
          placeholder="Enter Your Name"
          value={userName}
          label="User Name"
          id="userName"
          error={errors.userName}
        />
        <Input
          handleChange={handleChange}
          id="birthDate"
          name="birthDate"
          type="date"
          placeholder="Enter Your date"
          value={birthDate}
          label="Date of birth"
          error={errors.birthDate}
        />
        <Input
          handleChange={handleChange}
          name="password"
          type="password"
          placeholder="Enter Your password"
          value={password}
          label="Create password"
          id="password"
          error={errors.password}
        />
        <Input
          handleChange={handleChange}
          name="rePassword"
          type="password"
          placeholder="Repeat password"
          value={rePassword}
          label="Repeat password"
          id="rePassword"
          error={errors.rePassword}
        />
        <RegisterBtn type=" submit" className="register-btn-signup">
          Register
        </RegisterBtn>
        <Link to="/login" className="link-page">
          <LogInBtn className="login-btn-signup"> Log In</LogInBtn>
        </Link>
        {error && <Error>{error}</Error>}
      </Form>
    </div>
  );
}

export default Forms;
