import imagee from "./../../img/images/image 21.png";
const About_site = () => {
  return (
    <>
      <main>
        <section classNameName="hero">
          <div className="container">
            <p className="hero-text">
              <strong>Наша цель проста</strong> - сделать важнейший этап поиска
              работы простым, понятным и доступным. Ваше резюме - это первое,
              что видит потенциальный работодатель, и мы знаем, что у вас не
              будет второго шанса произвести первое впечатление.
            </p>
          </div>
        </section>

        <section className="main-content">
          <div className="container">
            <div className="line"></div>
            <h2 className="main-title">
              Ваш надежный помощник при поиске работы
            </h2>
            <img src={imagee} alt="Hero Image" className="hero-image" />
            <a href="#" className="cta-button">
              Создай резюме прямо сейчас
            </a>
            <p className="description">
              Важнейшей частью нашего онлайн-конструктора является пошаговая
              форма-образец резюме. С помощью нее вы сможете без труда составить
              резюме даже если ранее ни разу не брались за такую задачу.
              Составить резюме без опыта и навыков написания стало как никогда
              легко и удобно.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default About_site;
