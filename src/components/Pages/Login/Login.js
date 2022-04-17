import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Login.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import AuthSocial from "../Shared/AuthSocial/AuthSocial";
import Loading from "../Shared/Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetPassError] =
    useSendPasswordResetEmail(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const formSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
  };

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6">
            <div className="form-wrapper my-5">
              <p className="lead fw-bold">Please Login</p>
              <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    ref={emailRef}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <p className="lead">
                  Forget your password?{" "}
                  <Link to="" onClick={resetPassword}>
                    Reset password
                  </Link>
                </p>
                <Button variant="dark" className="px-5 mt-2 py-2" type="submit">
                  Login
                </Button>
              </Form>
              <div className="text-center or-line">
                <span>Or</span>
              </div>
              <AuthSocial></AuthSocial>
              <p className="lead">
                Don't have an account? <Link to="/signup">Signup Here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
