import React from "react";
import { Link } from "react-router-dom";
import "./SubmitLink.scss";

const SubmitLink = () => {
  return (
    <Link to="/addlink">
      <div className="submit-link">
        <p>SUBMIT A LINK</p>
      </div>
    </Link>
  );
};

export default SubmitLink;
