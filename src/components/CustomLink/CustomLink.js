import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomLink.css";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      {...props}
      className={`nav-link ${match ? "activeLink" : ""}`}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
