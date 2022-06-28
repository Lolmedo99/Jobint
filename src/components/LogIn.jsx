import React from "react";
import useInput from "../hooks/useInput";
import "../style/forms.scss";
import { Link } from "react-router-dom";

const LogIn = () => {
  const email = useInput();
  const password = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3 className="title-login">Iniciar sesión</h3>
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="example@email.com"
            {...email}
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control input"
            id="exampleInputPassword1"
            placeholder="Contraseña"
            {...password}
          />
        </div>
        <p>
          ¿No tienes cuenta todavía? <span></span>
          <span>
            <strong>
              <Link to={"/sigup"} className="detalles">
                Regístrate
              </Link>
            </strong>
          </span>
        </p>
        <button
          type="submit"
          className="btn btn-danger input btn-form btn-register"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default LogIn;
