import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import AuthSocial from "../Shared/AuthSocial/AuthSocial";
import Loading from "../Shared/Loading/Loading";

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
  }, [user]);

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
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
