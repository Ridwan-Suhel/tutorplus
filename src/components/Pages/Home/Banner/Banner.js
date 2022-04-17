import React from "react";
import bannerImg from "../../../../images/tutor.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="container px-4">
      <div className="row banner">
        <div className="col-lg-6 border border-2 border-secondary gx-0">
          <img src={bannerImg} alt="bannerImg" className="img-fluid" />
        </div>
        <div className="col-lg-6 border border-start-0 border-2 border-secondary d-flex align-items-center justify-content-center text-center">
          <div className="bannerTxt">
            <h1>Learn With Fun</h1>
            <p className="lead">
              I just don't teach. I provide more than a typical teaching method.
              Tutor plus is the one-stop solution for every 1 to 12-grade
              student.
            </p>
            <button className="btn btn-dark px-5 py-2">Book Now</button>
          </div>
        </div>

        {/* #F7FBFF */}
      </div>
    </div>
  );
};

export default Banner;
