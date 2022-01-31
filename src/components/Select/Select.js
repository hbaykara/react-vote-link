import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { sortLinks } from "store/links/actions";
import "./Select.scss";

const Select = ({ paginate }) => {
  const [orderBy, setOrderBy] = useState("lastAdded");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setOrderBy(e.target.value);
    paginate(1);
  }

  useEffect(() => {
    dispatch(sortLinks(orderBy));
  }, [dispatch, orderBy]);

  return (
    <div className="select">
      <select
        className="select__box"
        onChange={handleChange}
        value={orderBy}
      >
        <option value="lastAdded">Order by</option>
        <option value="mostVoted">Most Voted (Z -> A)</option>
        <option value="lessVoted">Less Voted (A -> Z)</option>
      </select>
    </div>
  );
};

export default Select;
