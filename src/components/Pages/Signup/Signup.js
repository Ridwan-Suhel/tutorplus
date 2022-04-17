import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6">
            <div className="form-wrapper my-5">
              <p className="lead fw-bold">Please Signup</p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <p className="lead">
                  Already have an account? <Link to="/login">Signin Here</Link>
                </p>
                <Button variant="dark" className="px-5 mt-2 py-2" type="submit">
                  Signup
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
