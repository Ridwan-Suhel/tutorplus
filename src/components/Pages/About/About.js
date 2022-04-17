import React from "react";
import ridwanjpg from "../../../images/ridwan.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row justify-content-center">
            <div className="col-8 col-md-4">
              <img className="img-fluid" src={ridwanjpg} alt="ridwan suhel" />
            </div>
          </div>
          <div className="box bg-dark text-white rounded p-5 mt-3 mb-3">
            <p className="display-5">Hi This is Ridwan Suhel.</p>
            <p className="lead">
              I am from Sylhet Bangladesh. I am a website development learner
              who is currently learning react js. I am so much confident about
              my learning, doing hard work beside lots of daily life pressure.
              My goal is to be a React js developer and inshallah i will crack
              this achivement in this june 2022. i am working hard to be an
              atleast junior level react developer with in upcoming 3 months.
            </p>
            <p className="lead">
              And to achive this goal i am doing regular practices, doing
              regular projects, joining classes with p-hero team. i am joining
              regular conceptual sessions and learning also from my favourite
              platform youtube.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
