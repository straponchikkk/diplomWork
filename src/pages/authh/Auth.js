import { useState } from "react";
import { NavLink } from "react-router-dom";
import Profile from "./../../components/profile/Profile";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return <Profile />;
  }

  return (
    <div className="auth-container">
      <nav className="auth-nav">
        <NavLink
          to="#"
          className={`auth-nav__link ${isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(true)}
        >
          Войти
        </NavLink>
        <NavLink
          to="#"
          className={`auth-nav__link ${!isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(false)}
        >
          Зарегистрироваться
        </NavLink>
      </nav>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Имя пользователя</label>
        <input
          type="text"
          id="username"
          placeholder="Введите имя пользователя"
          required
        />

        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          id="password"
          placeholder="Введите пароль"
          required
        />

        {isLogin ? (
          <>
            <p className="toggle-text">
              Нет аккаунта?{" "}
              <span onClick={() => setIsLogin(false)} className="toggle-link">
                Зарегистрироваться
              </span>
            </p>
            <button type="submit" className="auth-btn">
              Войти
            </button>
          </>
        ) : (
          <>
            <p className="toggle-text">
              Уже есть аккаунт?{" "}
              <span onClick={() => setIsLogin(true)} className="toggle-link">
                Войти
              </span>
            </p>
            <button type="submit" className="auth-btn">
              Зарегистрироваться
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Auth;
