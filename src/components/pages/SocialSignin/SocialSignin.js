import React from 'react';
import { Col } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firbase/firbase.init';
import './SocialSignin.css'
const SocialSignin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    let handleLoginSocial = async () => {
      await signInWithGoogle();
    };
    let googleError;
    if (error) {
      googleError = error?.message;
    }
    if (loading) {
    }
    if (user) {
      navigate(from, { replace: true });
    }
    return (
      <div className="google">
        <div className="or">
          <Col className="left"></Col>
          <h3>OR</h3>
          <Col className="right"></Col>
        </div>
        <div className="text-center">
          <p className="text-danger">{googleError}</p>
        </div>
        <button className="bg-warning" onClick={handleLoginSocial}>
          <img src="https://i.ibb.co/kGnrRm4/google.png" alt="" />
          <span>Google</span>
        </button>
      </div>
    );
};

export default SocialSignin;