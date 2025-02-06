import { NavLink } from "react-router-dom";
import React from "react";

const Nav: React.FC = () => {
  return (
    <nav
      style={{
        display: "flex",
        width: "100vw",
        boxSizing: "border-box",
        padding: "20px",
        justifyContent: "left",
      }}
    >
      <NavLink
        to="/"
        style={{
          marginRight: "35px",
          color: "white",
          fontSize: "14px",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/SavedCandidates"
        style={{
          color: "white",
          fontSize: "14px",
        }}
      >
        Potential Candidates
      </NavLink>
    </nav>
  );
};

export default Nav;
