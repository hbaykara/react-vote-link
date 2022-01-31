import React from 'react';
import { useDispatch } from 'react-redux';
import { voteLink } from 'store/links/actions';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { MdRemoveCircle } from 'react-icons/md';
import './ListItem.scss';

const ListItem = ({link, showModalHandler}) => {

  const dispatch = useDispatch();

  return (
    <div className="list-item">
      <div className="list-item__point">
        <strong>{link.points}</strong>
        <span>POINTS</span>
      </div>
      <div className="list-item__detail">
        <div className="list-item__name">
            {link.name}
        </div>
        <div className="list-item__url">
            {link.url}
        </div>
        <div className="list-item__vote">
            <span className="list-item__up" onClick={() => dispatch(voteLink({link, voteType:'up'}))}><FaArrowUp /> Up Vote</span>
            <span className="list-item__down" onClick={() => dispatch(voteLink({link, voteType:'down'}))}><FaArrowDown /> Down Vote</span>
        </div>
      </div>
      <div className="list-item__delete-icon" onClick={() => showModalHandler(link)}>
        <MdRemoveCircle />
      </div>
    </div>
  );
};

export default ListItem;
