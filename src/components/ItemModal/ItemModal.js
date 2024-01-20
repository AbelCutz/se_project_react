import "./ItemModal.css";
import "../ModalWithForm/ModalWithForm.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, onDelete }) => {
  const handleDeleteSubmit = () => onDelete(selectedCard);
  const currentUser = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser._id;
  const itemDeleteButtonClassName = `${
    isOwn ? "modal__deleteBtn_visible" : "modal__deletBtn_hidden"
  }`;

  return (
    <div className={`modal `} onClick={onClose}>
      <div
        className="modal__content-image"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={"modal__close-btn"}
          type="button"
          onClick={onClose}
        ></button>
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="modal__preview-image"
        />

        <div className="modal__caption">
          <span>{selectedCard.name}</span>
          <p>Weather: {selectedCard.weather}</p>
          <button
            className={itemDeleteButtonClassName}
            onClick={handleDeleteSubmit}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
