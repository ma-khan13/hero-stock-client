import React, { useRef, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firbase/firbase.init';
import './SignIn.css'
const SignIn = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let handleSignInForm = async (e) => {
      e.preventDefault();
      let email = emailRef.current.value;
      let password = passwordRef.current.value;
      await signInWithEmailAndPassword(email, password);
  }
  let signinError;
  if (error) {
    signinError = error?.message;
  }
  if (user) {
    navigate(from, { replace: true });
  }
let [emptyField , setEmptyField] = useState('')
  const [sendPasswordResetEmail, sending, resetEmailError] =
    useSendPasswordResetEmail(auth);
  
    let handleForgotPass = async() => {
      let email = emailRef.current.value;
      if (email) {
        await sendPasswordResetEmail(email);
        toast("Please check your email sent a resate password mail", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        setEmptyField("The email field is empty");
      }
    }
    return (
      <div>
        <Container>
          <Row>
            <Col md={6} className="mx-auto mt-5 sign-in-container">
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
                  {signinError ? (
                    <p className="text-danger">{signinError}</p>
                  ) : (
                    ""
                  )}
                  {emptyField ? (
                    <p className="text-danger">{emptyField}</p>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <Button className='mb-3' variant="link" onClick={handleForgotPass}>
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
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default SignIn;