import { NavLink } from "react-router-dom";
import React from "react";

const Nav: React.FC = () => {
  return (
    <nav
      style={{
        display: "flex",
        width: "100vw",
        boxSizing: "border-box",
        padding: "50px 50px 20px 50px",
        justifyContent: "left",
      }}
    >
      <NavLink
        to="/"
        style={{
          marginRight: "50px",
          color: "white",
          fontSize: "20px",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/SavedCandidates"
        style={{
          color: "white",
          fontSize: "20px",
        }}
      >
        Potential Candidates
      </NavLink>
    </nav>
  );
};

export default Nav;
