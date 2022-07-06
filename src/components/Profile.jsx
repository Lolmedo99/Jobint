import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import perfil from "../assets/profiles/perfil2.png";
import logo from "../assets/navbar/Group.png";
import background from "../assets/svg background/ondas.svg";
import phone from "../assets/fomrs/descarga3.png";
import useInput from "../hooks/useInput";
import { getOneRecruiter } from "../redux/recruiters";
import { getAssignedSearchRequest } from "../redux/assignedSearch";
import { getStatusUpDate } from "../redux/search";
import "../sass/profile.scss";

const Profile = () => {
  const date = new Date();
  const dispatch = useDispatch();
  let userId = useParams().id;
  const [validate, setValidate] = useState(false);
  const [selectedSearch, setSelectedSearch] = useState(0);

  const userRedux = useSelector((state) => state.recruiters);
  const searchs = useSelector((state) => state.assigned);
  const user = userRedux[0];
  console.log(searchs);

  const workersNum = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workersNum.value !== undefined && workersNum.value !== "0") {
      dispatch(getStatusUpDate({ id: selectedSearch, StatusId: 3 }));
      setValidate(true);
      setTimeout(() => {
        document.getElementById("closeBtn").click();
        window.location.reload();
      }, 1000);
    }

    e.target.reset();
  };

  const handleClose = (e) => {
    e.preventDefault();
    setValidate(false);
  };

  useEffect(() => {
    if (userRedux) {
      dispatch(getOneRecruiter(userId));
      dispatch(getAssignedSearchRequest(userId));
    }
  }, []);

  return (
    <div>
      <img className="background" src={background} />
      <div
        class="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Datos requeridos
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="modal-body">
                {" "}
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Número de candidatos presentados:
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="recipient-name"
                    min={0}
                    defaultValue={0}
                    {...workersNum}
                    required
                  />
                </div>
                {validate ? (
                  <div
                    class="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Enviado correctamente</strong>
                    <button
                      type="reset"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div class="modal-footer">
                <button
                  id="closeBtn"
                  type="reset"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleClose}
                >
                  Cerrar
                </button>
                <button type="submit" class="btn btn-primary">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container card-container">
        <div className="card glass-card">
          <div className="row">
            <div class="col-md-4 sidebar profile-card">
              <img className="profile-img" src={perfil} alt="" />
              <h2>{user.name}</h2>
              <h5>
                {user.rating}
                <AiFillStar />
              </h5>
              <Link to={`/admin/profiles/${user.id}`}>
                <FaEdit />
              </Link>
              <ul>
                <li>
                  <IoLocationSharp className="local" />
                  {user.country}
                </li>
                <li>
                  <MdWork className="work" />
                  {user.experienceField}
                </li>
                <li>
                  <MdEmail className="build" />
                  {user.email}
                </li>
              </ul>
            </div>
            <div class="col-md-8">
              <div class="card-body main">
                <div className="row">
                  <div className="col-md-10">
                    <div className="header">
                      <h2>{user.activeSearchs + " "}Búsquedas Activas</h2>
                      <span>{date.toLocaleDateString("es")}</span>
                    </div>
                    {searchs.length !== 0 ? (
                      searchs
                        .filter((search) => search.StatusId !== 2)
                        .map((search, i) => (
                          <div key={i} className="tasks">
                            <div className="search-card">
                              <Link to={`/searchs/${search.id}`}>
                                <div className="content">
                                  <div className="left">
                                    <img src={logo} width="50" alt="" />
                                  </div>
                                  <div className="right">
                                    <div className="task">{search.title}</div>
                                  </div>
                                </div>
                              </Link>
                              <div className="buttons">
                                <button
                                  className="botn "
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  onClick={() => setSelectedSearch(search.id)}
                                >
                                  Completar
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                    ) : (
                      <h2>NO HAY BÚSQUEDAS ASIGNADAS</h2>
                    )}
                  </div>
                  <div className="col-md-1">
                    <img className="phone" src={phone} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card description-card">
          <div className="card-header">Descripción</div>
          <div className="card-body">
            <p className="description-text">{user.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
