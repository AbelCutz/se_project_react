import "./ItemModal.css";
import "../ModalWithForm/ModalWithForm.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content-image">
        <button
          className={"modal__close-btn"}
          type="button"
          onClick={onClose}
        ></button>
        <img
          src={selectedCard.link}
          alt={selectedCard.name}
          className="modal__previw-image"
        />

        <div className="modal__caption">
          <span>{selectedCard.name}</span>
          <span>Weather: {selectedCard.weather}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
