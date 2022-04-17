import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <div className="container">
        <p className="lead text-center">
          Copyright &copy; {year} Tutorplus.com{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
