import React from 'react';
import './DeleteModal.scss';

const Modal = ({showModal, closeModalHandler, deleteItem, linkName}) => {
  return (
    <>
    <div className="modal-wrapper"
      style={{
        transform: showModal ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: showModal ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p>Remove Link</p>
        <span onClick={closeModalHandler} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>Do you want to remove?</h4>
          <p>{linkName}</p>
        </div>
        <div className="modal-footer">
          <button onClick={deleteItem} className="btn-cancel">OK</button>
          <button onClick={closeModalHandler} className="btn-cancel">CANCEL</button>
        </div>
      </div>
    </div>
    { showModal ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
    </>
  )
};

export default Modal;
