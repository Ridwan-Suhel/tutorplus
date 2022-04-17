import React from "react";
import four0four from "../../../images/giphy.gif";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5 notFound mt-5">
          <p className="lead text-center display-6 mb-3">
            Oops! Page Not Found.
          </p>
          <img
            className="img-fluid w-100 mb-5"
            src={four0four}
            alt="not found"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
