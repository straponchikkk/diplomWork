import { useState } from "react";
import styles from "./Creater.css";

const Creater = () => {
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

  return (
    <>
      <main>
        <section>
          <h1>Основная информация</h1>
          <form autocomplete="off" className="main-info-form">
            <div className="photo-box">
              <img height="240" width="240" />
              <div className="caption">Предоставьте фотографию</div>
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
        <button className="btn-submit" type="submit">
          Далее
        </button>
      </main>
    </>
  );
};

export default Creater;
