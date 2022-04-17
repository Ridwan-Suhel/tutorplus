import React, { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";
import SingleService from "./SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="service-section py-5 my-4">
      <div className="container">
        <h2 className="">Check my services</h2>
        <div className="service-wrapper py-5 my-4">
          <CardGroup className="gap-4">
            {services.map((service) => (
              <SingleService key={service.id} service={service}></SingleService>
            ))}
          </CardGroup>
        </div>
      </div>
    </section>
  );
};

export default Services;
