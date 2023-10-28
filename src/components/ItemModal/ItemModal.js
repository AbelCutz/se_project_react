import "./ItemModal.css";
import "../ModalWithForm/ModalWithForm.css";

const ItemModal = ({ selectedCard, onClose, onDelete }) => {
  const handleDeleteSubmit = () => onDelete(selectedCard);

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
          className="modal__previw-image"
        />

        <div className="modal__caption">
          <span>{selectedCard.name}</span>
          <p>Weather: {selectedCard.weather}</p>
          <button className="modal__deleteButton" onClick={handleDeleteSubmit}>
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
