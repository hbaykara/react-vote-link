import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SubmitLink from "components/SubmitLink";
import Select from 'components/Select';
import List from "components/List";
import Pagination from "components/Pagination";
import DeleteModal from "components/DeleteModal";
import toast, { Toaster } from 'react-hot-toast';
import "./LinkList.scss";

import { deleteLink } from 'store/links/actions';

const LinkList = () => {
  const [link, setLink] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [linksPerPage] = useState(5);
  const { data } = useSelector((state) => state.links);
  const dispatch = useDispatch();

  // Get current links
  const indexOfLastLink = currentPage * linksPerPage;
  const indexOfFirstLink = indexOfLastLink - linksPerPage;
  const currentLinks = data.slice(indexOfFirstLink, indexOfLastLink);

  const totalLinks = data.length;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const closeModalHandler = () => setShowModal(false);

  const showModalHandler = (link) => {
    setLink(link);
    setShowModal(true);
  };

  const deleteItem = () => {
    dispatch(deleteLink(link));
    setShowModal(false);
    toast.success(`${link.name} başarıyla kaldırıldı`);
  };

  return (
    <div className="link-list">
      <div><Toaster/></div>
      <SubmitLink />
      <Select paginate={paginate} />
      <List links={currentLinks} showModalHandler={showModalHandler} />
      {totalLinks > 0 && (
        <Pagination
          linksPerPage={linksPerPage}
          currentPage={currentPage}
          totalLinks={totalLinks}
          paginate={paginate}
        />
      )}
      <DeleteModal
        showModal={showModal}
        closeModalHandler={closeModalHandler}
        deleteItem={deleteItem}
        linkName={link && link.name}
      />
    </div>
  );
};

export default LinkList;
