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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    if (error?.message?.includes("user-not-found")) {
      toast("Oops! User Not found.");
    }
    if (error?.message?.includes("wrong-password")) {
      toast("Password is wrong.");
    }
    if (error?.message?.includes("Access to this account")) {
      toast(error.message);
    }
  }, [user, error]);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Enter your email first.");
    }
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
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                    required
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
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
