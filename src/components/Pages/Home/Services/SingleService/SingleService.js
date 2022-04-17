import React from "react";
import { Button, Card } from "react-bootstrap";
import "./SingleService.css";

const SingleService = ({ service }) => {
  const { name, description, image, price } = service;
  return (
    <Card className="border-0 single-card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>➖ {name}</Card.Title>
        <Card.Text className="lead">{description}</Card.Text>
        <p className="price lead">
          <strong>
            ${price}
            <sub>/MO</sub>
          </strong>
        </p>
        <Button variant="dark" className="px-4">
          Book Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleService;
