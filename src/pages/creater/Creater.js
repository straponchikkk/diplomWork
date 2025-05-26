import { useState } from "react";
import "./Creater.css";
import TemplateCard from "../../components/templatess/TemplateCard";
import type1 from "./../../img/shab/type1.png";
import type2 from "./../../img/shab/type2.png";
import type3 from "./../../img/shab/type3.png";
import type4 from "./../../img/shab/type4.png";
import type5 from "./../../img/shab/type5.png";

const Creater = () => {
  const [step, setStep] = useState("form"); // "form" | "templates" | "ready"
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const templates = [
    { id: 1, name: "Шаблон 1", image: type1 },
    { id: 2, name: "Шаблон 2", image: type2 },
    { id: 3, name: "Шаблон 3", image: type3 },
    { id: 4, name: "Шаблон 4", image: type4 },
    { id: 5, name: "Шаблон 5", image: type5 },
  ];
  const [gender, setGender] = useState("Мужской");
  const [driverLicenses, setDriverLicenses] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
    BE: false,
    CE: false,
    DE: false,
    Tm: false,
    Tb: false,
  });
  const [hasMedicalBook, setHasMedicalBook] = useState(false);
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoClick = () => {
    document.getElementById("file-upload").click();
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleDriverLicenseChange = (e) => {
    const { name, checked } = e.target;
    setDriverLicenses({ ...driverLicenses, [name]: checked });
  };

  const handleMedicalBookChange = () => {
    setHasMedicalBook(!hasMedicalBook);
  };

  // Обработчики для первой формы
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep("templates");
  };

  // Обработчик клика по шаблону
  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    setStep("ready");
  };

  const handleEdit = () => {
    setStep("form");
    setSelectedTemplate(null);
  };
  const handleDownload = () => {
    alert("Запускаем скачивание...");
  };

  return (
    <>
      {step === "form" && (
        <main className="main__creater">
          <section>
            <h1>Основная информация</h1>
            <form autocomplete="off" className="main-info-form">
              <div className="photo-box" onClick={handlePhotoClick}>
                {" "}
                {/* Клик по контейнеру */}
                <input
                  type="file"
                  className="photo-input"
                  onChange={handlePhotoChange}
                  style={{ display: "none" }} // Скрыть стандартный input
                  accept="image/*"
                  id="file-upload"
                />
                {/* Показ загруженного изображения */}
                {photo ? (
                  <img src={photo} alt="Загруженное изображение" />
                ) : (
                  <div className="caption">Предоставьте фотографию</div>
                )}
              </div>
              <div className="main-info-fields">
                <input placeholder="Фамилия *" type="text" />
                <input placeholder="Имя *" type="text" />
                <input placeholder="Отчество" type="text" />
                <div className="checkbox-group">
                  <input id="noPatronymics" type="checkbox" />
                  <label for="noPatronymics"> Нет отчества </label>
                </div>
                <input placeholder="Дата рождения *" type="date" />

                <input placeholder="Номер телефона" type="text" />
                <input placeholder="Адрес эл. почты" type="text" />
                <input placeholder="Должность " type="text" />
                <select>
                  <option disabled="" selected="">
                    Занятость
                  </option>
                  <option>Полная</option>
                  <option>Частичная</option>
                  <option>Проектная</option>
                  <option>Временная</option>
                </select>
                <select>
                  <option disabled="" selected="">
                    График работы
                  </option>
                  <option>Полный день</option>
                  <option>Сменный</option>
                  <option>Гибкий</option>
                  <option>Удалённая работа</option>
                  <option>Вахтовый метод</option>
                </select>

                <input placeholder="Желаемая зарплата " type="text" />
                <div className="checkbox-group">
                  <input id="noPatronymic" type="checkbox" />
                  <label for="noPatronymic"> Готовность к командировкам </label>
                </div>
              </div>
            </form>
          </section>

          <section>
            <h2>Личная информация</h2>
            <form autocomplete="off" className="personal-info-form">
              <input placeholder="Город проживания *" type="text" />
              <select>
                <option disabled selected>
                  Переезд
                </option>
                <option>Возможен</option>
                <option>Невозможен</option>
              </select>
              <select>
                <option disabled selected>
                  Гражданство *
                </option>
                <option>Россия</option>
                <option>Другая страна</option>
              </select>

              <div className="radio-group">
                <h3>Пол *</h3>
                <label className="radio-btn">
                  <input
                    type="radio"
                    name="gender"
                    value="Мужской"
                    checked={gender === "Мужской"}
                    onChange={handleGenderChange}
                  />
                  <span>Мужской</span>
                </label>
                <label className="radio-btn">
                  <input
                    type="radio"
                    name="gender"
                    value="Женский"
                    checked={gender === "Женский"}
                    onChange={handleGenderChange}
                  />
                  <span>Женский</span>
                </label>
              </div>

              <input
                placeholder="Семейное положение"
                type="text"
                className="custom-inputt"
              />
              <div className="checkbox-groupp">
                <input id="haveChildren" type="checkbox" />
                <label for="haveChildren"> Есть дети </label>
              </div>
            </form>
          </section>

          <section>
            <details className="details">
              <summary>Опыт работы</summary>
              <form autocomplete="off" className="work-experience-form">
                <header>
                  <button aria-label="Закрыть">
                    <i className="fas fa-times"></i>
                  </button>
                </header>
                <div className="form-group">
                  <input type="text" placeholder="Организация" />
                  <input type="text" placeholder="Должность" />
                </div>
                <div className="form-group dates">
                  <div className="date-group">
                    <h3 className="label-text">Период работы с</h3>
                    <div className="date-picker">
                      <select
                        name="start-month"
                        className="month custom-width"
                        aria-label="Месяц начала работы"
                      >
                        <option>месяц</option>
                        <option>январь</option>
                        <option>февраль</option>
                        <option>март</option>
                        <option>апрель</option>
                        <option>май</option>
                        <option>июнь</option>
                        <option>июль</option>
                        <option>август</option>
                        <option>сентябрь</option>
                        <option>октябрь</option>
                        <option>ноябрь</option>
                        <option>декабрь</option>
                      </select>
                    </div>

                    <input
                      type="text"
                      placeholder="Год начала"
                      className="custom-input"
                    />
                  </div>
                  <span>—</span>
                  <div className="date-group">
                    <h3 className="label-text">по</h3>
                    <div className="date-picker">
                      <select name="end-month" className="month custom-width">
                        <option>месяц</option>
                        <option>январь</option>
                        <option>февраль</option>
                        <option>март</option>
                        <option>апрель</option>
                        <option>май</option>
                        <option>июнь</option>
                        <option>июль</option>
                        <option>август</option>
                        <option>сентябрь</option>
                        <option>октябрь</option>
                        <option>ноябрь</option>
                        <option>декабрь</option>
                      </select>
                    </div>

                    <input
                      type="text"
                      placeholder="Год окончания"
                      className="custom-input"
                    />
                  </div>

                  <label className="checkbox-groupp">
                    <input type="checkbox" />
                    по настоящее время
                  </label>
                </div>
                <textarea
                  placeholder="Должностные обязанности"
                  rows="4"
                ></textarea>
              </form>
            </details>
          </section>

          <section>
            <details className="details">
              <summary>Образование</summary>
              <form autocomplete="off" className="education-form">
                <div className="form-group">
                  <input type="text" placeholder="Учебное заведение" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Специальность" />
                  <input type="text" placeholder="Факультет" />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Год окончания"
                    className="custom-input"
                  />
                  <select>
                    <option disabled selected>
                      Форма обучения
                    </option>
                    <option>Очная</option>
                    <option>Заочная</option>
                    <option>Очно-заочная(вечерняя)</option>
                  </select>
                </div>
              </form>
            </details>
          </section>

          <section>
            <h2>Дополнительная информация</h2>
            <form autoComplete="off" className="additional-info-form">
              <input placeholder="Владение иностранными языками" type="text" />

              <div className="radio-group">
                <h3>Водительские права:</h3>
                <label className="checkbox-btn">
                  <input
                    type="checkbox"
                    name="A"
                    checked={driverLicenses.A}
                    onChange={handleDriverLicenseChange}
                  />
                  <span>A</span>
                </label>
                <label className="checkbox-btn">
                  <input
                    type="checkbox"
                    name="B"
                    checked={driverLicenses.B}
                    onChange={handleDriverLicenseChange}
                  />
                  <span>B</span>
                </label>
                <label className="checkbox-btn">
                  <input
                    type="checkbox"
                    name="C"
                    checked={driverLicenses.C}
                    onChange={handleDriverLicenseChange}
                  />
                  <span>C</span>
                </label>
                <label className="checkbox-btn">
                  <input
                    type="checkbox"
                    name="D"
                    checked={driverLicenses.D}
                    onChange={handleDriverLicenseChange}
                  />
                  <span>D</span>
                </label>
                <label className="checkbox-btn">
                  <input
                    type="checkbox"
                    name="BE"
                    checked={driverLicenses.BE}
                    onChange={handleDriverLicenseChange}
                  />
                  <span>BE</span>
                </label>
                <label className="checkbox-btn">
                  <input
                    type="checkbox"
                    name="CE"
                    checked={driverLicenses.CE}
                    onChange={handleDriverLicenseChange}
                  />
                  <span>CE</span>
                </label>
                <label className="checkbox-btn">
                  <input
                    type="checkbox"
                    name="DE"
                    checked={driverLicenses.DE}
                    onChange={handleDriverLicenseChange}
                  />
                  <span>DE</span>
                </label>
                <label className="checkbox-btn">
                  <input
                    type="checkbox"
                    name="Tm"
                    checked={driverLicenses.Tm}
                    onChange={handleDriverLicenseChange}
                  />
                  <span>Tm</span>
                </label>
                <label className="checkbox-btn">
                  <input
                    type="checkbox"
                    name="Tb"
                    checked={driverLicenses.Tb}
                    onChange={handleDriverLicenseChange}
                  />
                  <span>Tb</span>
                </label>
              </div>

              <div className="checkbox-groupp">
                <input
                  id="havemedic"
                  type="checkbox"
                  checked={hasMedicalBook}
                  onChange={handleMedicalBookChange}
                />
                <label htmlFor="havemedic"> Есть медицинская книжка </label>
              </div>
              <textarea placeholder="Личные качества" rows="4"></textarea>
            </form>
          </section>
          <button className="btn-submit" type="submit" onClick={handleSubmit}>
            Далее
          </button>
        </main>
      )}
      {step === "templates" && (
        <div className="templates-wrapper">
          <h3 className="template-selection__title2">Выберите шаблон</h3>
          <div className="template-selection">
            {templates.map((tpl) => (
              <TemplateCard
                key={tpl.id}
                template={tpl}
                onClick={() => handleSelectTemplate(tpl)}
              />
            ))}
          </div>
        </div>
      )}

      {step === "ready" && (
        <div className="resume-ready">
          <h2>Ваше резюме готово!</h2>
          <div className="resume-ready__actions">
            <button className="btn-edit" onClick={handleEdit}>
              Редактировать
            </button>
            <button className="btn-download" onClick={handleDownload}>
              Скачать
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Creater;
