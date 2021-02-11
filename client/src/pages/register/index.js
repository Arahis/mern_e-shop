import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import FormContainer from "../../components/FormContainer";
import { Link } from "react-router-dom";
import { register } from "../../redux/actions/userActions";

const Register = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userData } = userRegister;

  // const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (userData) {
      history.push("/");
    }
  }, [history, userData]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(register(name, email, password));
    } else {
      setMessage("Passwords do not match");
    }
  };

  return (
    <FormContainer>
      <h1>Sign in</h1>
      {error && <div>{error}</div>}
      {message && <div>{message}</div>}
      {loading && <Spinner />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="pssword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="confirmpssword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <Row>
        <Col>
          Have an account?
          {/* <Link
            to={redirect ? `/login/redirect=${redirect}` : `/login`}
            className="ml-1"
          >
            Login
          </Link> */}
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Register;
