import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  isOpen,
  onSubmit,
  name,
  altOptionBtn,
  onAltOptionBtn,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <h3 className="modal__title">{title}</h3>
        <button className="modal__close-btn" type="button" onClick={onClose} />
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__submit-btn">
            {buttonText}
          </button>
          {altOptionBtn && (
            <button
              type="button"
              className="modal__alt-btn"
              onClick={onAltOptionBtn}
            >
              {altOptionBtn}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
