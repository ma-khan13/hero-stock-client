import React, { useRef } from 'react';
import auth from '../../../firbase/firbase.init';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

const SignUp = () => {
  const navigate = useNavigate();
    const nameRef = useRef("");
    const emailRef = useRef("");
  const passwordRef = useRef("");
  
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [updateProfile] = useUpdateProfile(auth);

    let handleSignUpForm = async(e) => {
      e.preventDefault();
      let name = nameRef.current.value;
      let email = emailRef.current.value;
      let password = passwordRef.current.value;
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      await sendEmailVerification();
  }
  
  let signUpError;
  if (error) {
    signUpError = error?.message;
  }
  if (loading) {
  }
  if (user) {
    console.log(user);
    return navigate("/");
  }
    return (
      <div>
        <Container>
          <Row>
            <Col md={6} className="mx-auto mt-5 sign-up-container">
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
                  <p className="text-danger">{signUpError}</p>
                </Form.Group>
                <button className="btn btn-warning" type="submit">
                  Sign Up
                </button>
              </Form>
              <p className="mt-2">
                If you already have an account,
                <Link to={"/signin"}> Now Sign-In</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default SignUp;