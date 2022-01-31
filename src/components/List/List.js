import React from 'react';
import './List.scss';
import ListItem from 'components/ListItem';

const List = ({links, ...props}) => {
  
  return (
    <div className="link-list-area">
      {links.map((link, i) => (
          <ListItem key={i} link={link} {...props} />
      ))}
    </div>
  );
};

export default List;
