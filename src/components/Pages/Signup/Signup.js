import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import AuthSocial from "../Shared/AuthSocial/AuthSocial";
import Loading from "../Shared/Loading/Loading";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const formSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(email, password);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    if (error?.message?.includes("invalid-email")) {
      toast("Invalid Email.");
    }
    if (error?.message?.includes("email-already-in-use")) {
      toast("Email already exist.");
    }
    if (error?.message?.includes("weak-password")) {
      toast("weak-password.");
    }

    if (error) {
      console.log(error.message);
      // invalid-email
    }
  }, [user, error]);

  let errMsg = "";
  if (error?.message?.includes("weak-password")) {
    errMsg = "✖ Password must contain 6 Charecters.";
  } else {
    errMsg = "";
  }

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6">
            <div className="form-wrapper my-5">
              <p className="lead fw-bold">Please Signup</p>
              <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" required />
                </Form.Group>

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
                <p className="lead text-danger">{errMsg}</p>

                <p className="lead">
                  Already have an account? <Link to="/login">Signin Here</Link>
                </p>
                <Button variant="dark" className="px-5 mt-2 py-2" type="submit">
                  Signup
                </Button>
              </Form>
              <div className="text-center or-line">
                <span>Or</span>
              </div>
              <AuthSocial></AuthSocial>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
