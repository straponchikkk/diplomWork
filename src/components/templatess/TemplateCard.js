import "./TemplateCard.css";

const TemplateCard = ({ template, onClick, selected }) => {
  return (
    <div
      className={`template-card${selected ? " selected" : ""}`}
      onClick={onClick}
    >
      <div className="template-card__image">
        <img
          src={template.image}
          alt={`Шаблон ${template.id}`}
          onError={(e) => (e.target.src = "/img/placeholder.png")}
        />
      </div>
      <div className="template-card__content">
        <h3 className="template-card__title">{template.name}</h3>
      </div>
    </div>
  );
};

export default TemplateCard;
