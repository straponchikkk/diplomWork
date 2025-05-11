import vk from "./../../img/icons/vk.png";
import internet__png from "./../../img/icons/internet_png.png";
import telegram from "./../../img/icons/telegram.png";
import github from "./../../img/icons/github.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={vk} alt="link" />
              </a>
            </li>

            <li className="social__item">
              <a href="#!">
                <img src={internet__png} alt="link" />
              </a>
            </li>

            <li className="social__item">
              <a href="#!">
                <img src={github} alt="link" />
              </a>
            </li>

            <li className="social__item">
              <a href="#!">
                <img src={telegram} alt="link" />
              </a>
            </li>
          </ul>
          <p className="copyright">@ 2025 every work</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
