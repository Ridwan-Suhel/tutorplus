import React from "react";
import "./BestSelling.css";
import icon from "../../../../images/academic-bg.webp";
const BestSelling = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="">Check out my best enrolling course</h2>

        <div className="row mt-5">
          <div className="col-md-6 col-lg-4">
            <div className="best-selling-card physycs">
              <p className="lead fw-bold">Physycs for twelfth</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="best-selling-card math">
              <p className="lead fw-bold">Math for 9 &amp; 10 grade</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="best-selling-card ssc">
              <p className="lead fw-bold">SSC Combo all in one</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
