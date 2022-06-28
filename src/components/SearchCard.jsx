import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import logo from "../assets/navbar/Group.png";
import "../style/searchs.scss";

function SearchCard({ country, area, time, status }) {
  const date = new Date().getTime();
  const diff = (date - time) / (1000 * 60 * 60 * 24);

  return (
    <div class="container mb-4">
      <div class="card">
        <div class="row">
          <div class="col img-container col-lg-2">
            <img src={logo} alt="logo" class="card-img" />
          </div>
          <div class="col ">
            <div
              class="card-body "
              style={{ maxHeight: "190px", overflow: "hidden" }}
            >
              <h5 class="card-title">
                Supervisor Alto Horno y Laminación - Ternium
              </h5>
              <p class="card-text">
                Importante empresa siderurgica en busca de persona capacitada y
                experimentada en el sector. Funciones Principales: 1- Conocer
                flujo del funcionamiento del alto Horno 2- Tener conocimiento
                previo de mantenimiento durante el proceso de colada 3-
                Implementar adecuadamente las tecnoñogías pedidas Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Praesentium ad
                deserunt quas, nam cupiditate aliquid numquam odit explicabo aut
                quo? Magnam neque iure repudiandae explicabo quis, reprehenderit
                fugiat veniam omnis.
              </p>
            </div>
          </div>
          <div class="col col-lg-1">
            <div
              class="vr mt-4 bg-secondary"
              style={{ height: "130px", width: "1px" }}
            ></div>
          </div>
          <div class="col col-lg-2 mt-5">
            <div class="row">
              <div class="col d-flex justify-content-left">
                <IoLocationSharp class="local" size={30} />
                <p>{country}</p>
              </div>
            </div>
            <div class="row">
              <div class="col d-flex justify-content-left">
                <FaBuilding class="build" size={30} />
                <p>Presencial</p>
              </div>
            </div>
            <div class="row">
              <div class="col d-flex justify-content-left">
                <MdWork class="work" size={30} />
                <p>{area}</p>
              </div>
            </div>
          </div>
          <div class="col col-lg-1">
            <span class="badge">{status}</span>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-center">
          <small>
            {diff >= 1
              ? parseInt(diff) === 1
                ? "Publicado hace 1 día"
                : `Publicado hace ${parseInt(diff)} días`
              : `Publicado hace ${parseInt(diff * 24)} horas`}
          </small>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
