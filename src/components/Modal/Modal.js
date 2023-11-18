import React, { useState } from "react";
import "./modal.css";
import Form from "../Form/Form";

const Modal = (props) => {
  const [hasCursor, setHasCursor] = useState(false);

  const handleCloseModal = () => {
    if (!hasCursor) {
      props.toggleModal();
    }
  };

  const handleMouseOver = () => setHasCursor(true);
  const handleMouseOut = () => setHasCursor(false);

  return (
    <div
      className={props.isModalOpen ? "modal open-modal" : "modal"}
      onClick={handleCloseModal}
    >
      <div
        className="modal-content"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="form-container">
          <Form
            edit
            selectedNote={props.selectedNote}
            toggleModal={props.toggleModal}
            editNote={props.editNote}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
