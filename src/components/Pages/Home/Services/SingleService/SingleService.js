import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SingleService.css";

const SingleService = ({ service }) => {
  const { name, description, image, price } = service;
  const navigate = useNavigate();
  const navigateCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="col">
      <Card className="border-0 single-card">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>➖ {name}</Card.Title>
          <Card.Text className="lead">{description}</Card.Text>
          <p className="price fw-bold lead">
            <strong>
              ${price}
              <sub>/MO</sub>
            </strong>
          </p>
          <Button
            variant="dark"
            className="px-4 checkout-btn"
            onClick={navigateCheckout}
          >
            <span>Check out now</span> <span>✈</span>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleService;
