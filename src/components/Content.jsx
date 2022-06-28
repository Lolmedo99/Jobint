import React from "react";
import "../style/contenido.scss";
import { BsNewspaper } from "react-icons/bs";
import {
  FaCodeBranch,
  FaPeopleArrows,
  FaLaptopCode,
  FaHandsHelping,
} from "react-icons/fa";
import img1 from "../assets/contenido/descarga9.png";
import img2 from "../assets/contenido/descarga10.png";
import img3 from "../assets/contenido/descarga11.png";
import img5 from "../assets/contenido/descarga12.png";
import img6 from "../assets/contenido/descarga13.png";
import img7 from "../assets/contenido/descarga14.png";
import img8 from "../assets/contenido/descarga15.png";

const Content = () => {
  return (
    <div className="container-fluid">
      <div className="contenido">
        <div class="card-contenido">
          <div class="card-body">
            <h2 className="titulo-contenido">
              <strong>Hunting</strong>, un reclutamiento inteligente.
            </h2>
            <strong>
              <p>Ahorra tiempo y dinero seleccionando al candidato ideal</p>
            </strong>
            <h3>
              ¿Cómo <strong>funciona?</strong>
            </h3>
          </div>
        </div>
        <div class="row home">
          <div class="col-lg-4 ">
            <div>
              <img src={img8} />
            </div>
            <div>
              <img src={img1} />
            </div>
            <div>
              <img src={img2} />
            </div>
            <div>
              <img src={img3} />
            </div>
            <div>
              <img src={img5} />
            </div>
            <div>
              <img src={img6} />
            </div>
            <div>
              <img src={img7} className="candidatos" />
            </div>
          </div>
          <div class="col-lg-5">
            <ul>
              <li>
                <FaLaptopCode className="iconos" /> Inteligencia Artificial
                vinculada al reclutador experto que mejor se adapta a la
                búsqueda.
              </li>
              <li>
                <BsNewspaper className="iconos" />
                Públicaión del aviso en principales portales de empleo y
                universidades con el máximo destaque.
              </li>
              <li>
                <FaCodeBranch className="iconos" />
                Algoritmos que detectan a los mejores candidatos.
              </li>
              <li>
                <FaPeopleArrows className="iconos" /> Entrevistas y estudios
                comportamentales liderados por el experto en reclutamiento.
              </li>
              <li>
                <FaHandsHelping className="iconos" /> Presentación de finalistas
              </li>
            </ul>
          </div>

          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
