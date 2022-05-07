import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignIn.css'
const SignIn = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    let handleSignInForm = () => { }
    let handleForgotPass = () => {
        
    }
    return (
      <div>
        <Container>
          <Row>
            <Col
              md={6}
              className="mx-auto mt-5 sign-in-container"
            >
              <h2 className="mt-3 mb-4 text-uppercase">Welcome back</h2>
              <Form onSubmit={handleSignInForm}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    ref={emailRef}
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <Button variant="link" onClick={handleForgotPass}>
                  Forgot your password?
                </Button>
                <br />
                <button className="btn btn-outline-dark me-2" type="submit">
                  Sign-In
                </button>
              </Form>
              <p className="mt-2">
                Create a new account, <Link to={"/signup"}>Sign-Up Now</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default SignIn;