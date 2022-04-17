import React from "react";
import Banner from "./Banner/Banner";
import BestSelling from "./BestSelling/BestSelling";
import Services from "./Services/Services";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <Services></Services>
      <BestSelling></BestSelling>
    </main>
  );
};

export default Home;
