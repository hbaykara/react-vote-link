import React from "react";
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import "./ReturnLink.scss";

const ReturnLink = () => {
  return (
    <div className="return-link">
      <Link className="return-link__text" to="/">
        <BiArrowBack />
        <span>Return to List</span>
      </Link>
    </div>
  );
};

export default ReturnLink;
