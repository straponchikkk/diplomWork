import { NavLink, Link } from "react-router-dom";
import "./style.css";

const links = [
  { to: "/", end: true },
  { to: "/create", label: "Составить резюме" },
  { to: "/templates", label: "Шаблоны" },
  { to: "/about", label: "О сайте" },
  { to: "/authh", label: "Войти" },
];

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <Link to="/" className="logo">
            GO WORK
          </Link>

          <ul className="nav-list">
            {links.map(({ to, label, end }) => (
              <li key={to} className="nav-list__item">
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    "nav-list__link" +
                    (isActive ? " nav-list__link--active" : "")
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
