import React, { useRef } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    let handleSignUpForm = () => {
        
    }
    return (
      <div>
        <Container >
          <Row>
            <Col
              md={6}
              className="mx-auto mt-5"
              style={{ backgroundColor: "white",borderRadius:'7px',padding:'10px  55px 70px'}}
            >
              <h2 className="mt-3 mb-4 text-uppercase">Sign-up now</h2>
              <Form onSubmit={handleSignUpForm}>
                <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    ref={nameRef}
                    type="text"
                    placeholder="Enter Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
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
                    placeholder="Enter Password"
                    required
                  />
                  {/* <p className="text-danger">{signUpError}</p> */}
                </Form.Group>
                <button className="btn btn-warning" type="submit">
                  Sign Up
                </button>
              </Form>
              <p className="mt-2">
                If you already have an account,
                <Link to={"/login"}>Now Sign-In</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default SignUp;