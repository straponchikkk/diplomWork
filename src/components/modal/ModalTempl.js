import "./ModalTempl.css";

const Modal = ({ isOpen, onClose, template }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{template.name}</h2>
        <img src={template.image} alt={template.name} className="modal-image" />
        <button className="modal-close" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Modal;
