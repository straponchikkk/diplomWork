import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./TemplateSelection.css";
import TemplateCard from "../../components/templatess/TemplateCard";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/modal/ModalTempl";

import type1 from "./../../img/shab/type1.png";
import type2 from "./../../img/shab/type2.png";
import type3 from "./../../img/shab/type3.png";
import type4 from "./../../img/shab/type4.png";
import type5 from "./../../img/shab/type5.png";

const templates = [
  { id: 1, name: "Шаблон 1", image: type1 },
  { id: 2, name: "Шаблон 2", image: type2 },
  { id: 3, name: "Шаблон 3", image: type3 },
  { id: 4, name: "Шаблон 4", image: type4 },
  { id: 5, name: "Шаблон 5", image: type5 },
];

const TemplateSelection = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleCreate = () => {
    navigate("/create");
  };

  const openModal = (template) => {
    setSelectedTemplate(template);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTemplate(null);
  };

  const items = templates.map((template) => (
    <div key={template.id} onClick={() => openModal(template)}>
      <TemplateCard template={template} />
    </div>
  ));

  return (
    <section className="template-selection">
      <h1 className="template-selection__title">
        Подберите подходящий макет и выделитесь среди конкурентов!
      </h1>

      <AliceCarousel
        mouseTracking
        items={items}
        responsive={{
          0: { items: 1 },
          568: { items: 2 },
          1024: { items: 3 },
        }}
        disableDotsControls
        renderPrevButton={() => (
          <button className="arrow arrow--prev">{`‹`}</button>
        )}
        renderNextButton={() => (
          <button className="arrow arrow--next">{`›`}</button>
        )}
      />
      <button className="create-resume-button" onClick={handleCreate}>
        Перейти к созданию
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        template={selectedTemplate}
      />
    </section>
  );
};

export default TemplateSelection;
