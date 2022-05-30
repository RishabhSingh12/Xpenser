import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./success-modal.css";

const SuccessModal = ({ modalOpen, setModalOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#71ccca",
      borderRadius: "12px",
      ariaHideApp: "false",
    },
  };
  return (
    <Modal isOpen={modalOpen} style={customStyles} ariaHideApp={false}>
      <div className="modal-inner">
        <label>Expense Added Successfully</label>
        <img
          src={require("../../assets/images/added-image.png").default}
          alt="Expense Added"
          className="added-image"
        />
        <Link to="/">
          <div className="take-home-button">
            <i className="fi-rr-home"></i>
            Go to main screen
          </div>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
