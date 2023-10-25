import React from "react";
import "./DeleteConfirmModal.css";

const DeleteConfirmModal = ({ onClose, isOpen, onSubmit, selectedCard }) => {
  const handleDeleteItem = () => {
    onSubmit(selectedCard);
  };

  return (
    <div className="modal" onClick={onClose}>
      <div
        className={`modal__content modal_type_confirm`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={"modal__close-btn"}
          type="button"
          onClick={onClose}
        ></button>
        <p className="modal__caution">
          <span>Are you sure you want to delete this item?</span>
          <span>This action is irreversible</span>
        </p>
        <div className="modal__options">
          <button
            className="modal__button modal__delete"
            type="button"
            onClick={handleDeleteItem}
          >
            Yes, delete item
          </button>
          <button
            className="modal__button modal__cancel"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
