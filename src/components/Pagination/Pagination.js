import React, { useState } from "react";
import "./Pagination.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Pagination = ({ linksPerPage, totalLinks, paginate, currentPage }) => {
  const pageNumbers = [];

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  for (let i = 1; i <= Math.ceil(totalLinks / linksPerPage); i++) {
    pageNumbers.push(i);
  }
 
  const renderPageNumbers = pageNumbers.map((number) => {

    if (number <= maxPageNumberLimit && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={() => paginate(number)}
          className={`pagination__item ${
            currentPage === number ? "active" : ""
          }`}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextBtn = () => {
    paginate(currentPage + 1);

    if(currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  const handlePrevBtn = () => {
    paginate(currentPage - 1);

    if((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }

  return (
    <nav>
      <ul className="pagination">
        <li
          className={`pagination__item ${currentPage === 1 ? "disabled" : ""}`}
          onClick={handlePrevBtn}
        >
          <IoIosArrowBack />
        </li>
        {renderPageNumbers}
        <li
          className={`pagination__item ${
            currentPage === pageNumbers.length ? "disabled" : ""
          }`}
          onClick={handleNextBtn}
        >
          <IoIosArrowForward />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
