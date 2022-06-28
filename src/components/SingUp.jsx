import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import "../style/forms.scss";

const SingUp = () => {
  const paises = [
    "Argentina",
    "Chile",
    "Colombia",
    "Ecuador",
    "Mexico",
    "Panama",
    "Peru",
    "Uruguay",
  ];
  const name = useInput();
  const lastName = useInput();
  const email = useInput();
  const password = useInput();
  const dispatch = useDispatch();

  /* handler submit con el dispatch */
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h3 className="title-register-login">Crea una cuenta</h3>

      <form className="form" onSubmit={handleSubmit}>
        <div clasName="row g-3">
          <div className="col">
            <label>
              Nombre(s)<span className="obligatorio">*</span>
            </label>
            <input
              type="text"
              className="form-control input"
              placeholder="Nombre"
              aria-label="Nombre"
              {...name}
            />
          </div>
          <div className="col">
            <label>
              Apellido(s)<span className="obligatorio">*</span>
            </label>
            <input
              type="text"
              className="form-control input"
              placeholder="Apellido"
              aria-label="Apellido"
              {...lastName}
            />
          </div>
        </div>
        <label></label>

        <div className="mb-3">
          <label>
            Email<span className="obligatorio">*</span>
          </label>
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
          <label>
            Contraseña<span className="obligatorio">*</span>
          </label>
          <input
            type="password"
            className="form-control input"
            id="exampleInputPassword1"
            placeholder="Contraseña"
            {...password}
          />
        </div>

        <p>
          Al hacer click en Crear cuenta, acepto las{" "}
          <span className="detalles">
            <strong>Condiciones de uso y las Políticas de privacidad</strong>
          </span>{" "}
          de Bumeran
        </p>

        <button
          type="submit"
          className="btn btn-danger input btn-form btn-register"
        >
          Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default SingUp;
