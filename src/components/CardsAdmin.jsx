/* Relacionado con ViewAdmin */
import React, { useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import { VscTrash } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { deleteRecruiter } from "../redux/recruiters";
import { BiTrash } from 'react-icons/bi'
import { FaEdit } from "react-icons/fa";
import perfil from "../assets/profiles/perfil2.png";
import "../sass/cardsAdmin.scss";
import "../sass/ranking.scss";

const CardsAdmin = ({ items }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteRecruiter(items.id));
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div>
      <div className="container-parent">
        <div className="container-card">

          <div className="avatar">
            <img src={perfil} height={75} />
            <Link to={`/profile/${items.id}`}>
              <h6>{items.name + " " + items.lastName} </h6>
            </Link>
          </div>

          <div className="flex">

            <div className="container-ranking">
              <div className="skills-wrapper">
                <div className="skill">
                  <div className="skill-content">
                    <span>{items.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-busquedas">
              <p>{items.activeSearchs} </p>
            </div>


          </div>

          <div className="btn-grupo">
            <Link to={`/admin/profiles/${items.id}`}>
              <button type="button" class="btn btn-danger">
                <FaEdit />
              </button>
            </Link>
            {/* <button
              
              type="button"
              class="btn btn-dander trash-btn"
            >
              <BiTrash />
            </button> */}

            <button type="button" class="btn btn-danger trash-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <BiTrash />
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Eliminar reclutador</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ¿Desea eliminar a este reclutador de la base de datos?
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger trash-btn" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-danger trash-btn" onClick={handleDelete} >Aceptar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >


  );
};

export default CardsAdmin;
