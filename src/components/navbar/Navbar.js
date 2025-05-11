import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const links = [
    { to: "/creater", label: "Составить резюме" },
    { to: "/templatess", label: "Шаблоны" },
    { to: "/about", label: "О сайте" },
    { to: "/auth", label: "Войти" },
  ];

  const handleClick = (to) => {
    setActiveLink(to);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <Link to="/" className="logo" onClick={() => handleClick("/")}>
            GO WORK
          </Link>
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.to} className="nav-list__item">
                <Link
                  to={link.to}
                  className={`nav-list__link ${
                    activeLink === link.to ? "nav-list__link--active" : ""
                  }`}
                  onClick={() => handleClick(link.to)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
