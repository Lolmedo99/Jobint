import React from "react";
import { useParams } from "react-router";
import { FaUserAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { BsFillClockFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import "../style/searchs.scss";

function SearchView() {
  const params = useParams();
  const id = params.id;
  const date = new Date().getTime();

  const selectedSearch = {
    country: "Colombia",
    area_search: "Construcción",
    position: "Supervisor",
    vacancies: 1,
    status: "No iniciada",
    jobSchedules: "Full Time",
    salary: "$3000",
    title: "Supervisor Alto Horno y Laminación - Ternium",
    time: new Date(2022, 5, 26, 14, 0, 0).getTime(),
  };
  const diff = (date - selectedSearch.time) / (1000 * 60 * 60 * 24);

  const recruiters = [
    {
      name: "Martina Muriel Méndez",
      country: "Colombia",
      area: "Construcción",
      rating: 4.8,
      photo: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
    },
    {
      name: "Jorge Javier Jacob",
      country: "Colombia",
      area: "Construcción",
      rating: 2,
      photo:
        "https://us.123rf.com/450wm/stocking/stocking1604/stocking160400408/55156780-retrato-de-un-apuesto-hombre-de-negocios.jpg?ver=6",
    },
    {
      name: "Luis Lisandro Lezcano",
      country: "Colombia",
      area: "Construcción",
      rating: 3.9,
      photo:
        "https://misimagenesde.com/wp-content/uploads/2017/04/barbas-3.jpg",
    },
    {
      name: "Lionel Andrés Messi ",
      country: "Argentina papá",
      area: "Fulbo",
      rating: 10,
      photo:
        "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/10/19/16346783870037.jpg",
    },
  ];

  return (
    <div class="container ">
      <div class="row">
        <div class="card  mb-5">
          <div className="badge-pos">
            <span className="badge ">{selectedSearch.status}</span>
          </div>
          <h1 class="d-flex justify-content-center margin-top">
            {selectedSearch.title}
          </h1>

          <div class="d-flex justify-content-center mb-3">
            <FaUsers size={20} style={{ alignSelf: "center" }} />
            <h5 style={{ paddingTop: "0.5rem", marginLeft: "0.3rem" }}>
              Puestos vacantes:{selectedSearch.vacancies}
            </h5>
          </div>
          <div class="col  d-flex justify-content-center">
            <h5 class="info-text">
              <ul>
                Importante empresa siderurgica en busca de persona capacitada y
                experimentada en el sector.
              </ul>
              <ul class="mt-4">Funciones Principales:</ul>
              <ul>* Conocer flujo del funcionamiento del alto Horno.</ul>
              <ul>
                * Tener conocimiento previo de mantenimiento durante el proceso
                de colada.
              </ul>
              <ul>* Implementar adecuadamente las tecnoñogías pedidas.</ul>
            </h5>
          </div>
          <div class="row mt-4">
            <div class="col d-flex justify-content-center">
              <div class="card" id="search-card">
                <div class="card-body d-flex">
                  <div class="col d-flex justify-content-left">
                    <IoLocationSharp
                      class="local"
                      style={{ alignSelf: "center" }}
                    />
                    {selectedSearch.country}
                  </div>
                  <div
                    class="vr bg-secondary"
                    style={{ marginRight: "20px", width: "1px" }}
                  ></div>
                  <div class="col d-flex justify-content-left">
                    <MdWork class="work" style={{ alignSelf: "center" }} />
                    {selectedSearch.area_search}
                  </div>
                  <div
                    class="vr bg-secondary"
                    style={{ marginRight: "20px", width: "1px" }}
                  ></div>
                  <div class="col d-flex justify-content-left">
                    <BsFillClockFill
                      class="clock"
                      style={{ alignSelf: "center" }}
                    />
                    {selectedSearch.jobSchedules}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row margin-bot">
            <div class="col d-flex justify-content-center">
              <div class="card" id="search-card">
                <div class="card-body d-flex">
                  <div class="col d-flex justify-content-left">
                    <FaBuilding class="local" style={{ alignSelf: "center" }} />
                    Presencial
                  </div>
                  <div
                    class="vr bg-secondary"
                    style={{ marginRight: "20px", width: "1px" }}
                  ></div>
                  <div class="col d-flex justify-content-left">
                    <RiMoneyDollarCircleFill
                      class="work"
                      style={{ alignSelf: "center" }}
                    />
                    {selectedSearch.salary}
                  </div>
                  <div
                    class="vr bg-secondary"
                    style={{ marginRight: "20px", width: "1px" }}
                  ></div>
                  <div class="col d-flex justify-content-left">
                    <BsFillClockFill
                      class="clock"
                      style={{ alignSelf: "center" }}
                    />
                    {diff >= 1
                      ? parseInt(diff) === 1
                        ? "Publicado hace 1 día"
                        : `Publicado hace ${parseInt(diff)} días`
                      : `Publicado hace ${parseInt(diff * 24)} horas`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedSearch.status !== "Finalizada" ? (
        <div>
          <h3 className="mb-4">Reclutadores recomendados</h3>
        </div>
      ) : (
        ""
      )}

      {selectedSearch.status !== "Finalizada"
        ? recruiters
            .sort((x, y) => {
              if (x.rating < y.rating) {
                return 1;
              }
              if (x.rating > y.rating) {
                return -1;
              }
              return 0;
            })
            .map((recruiter, index) => (
              <div key={index} class="d-flex justify-content-center mb-4">
                <div class="card card-border-radius" style={{ width: "70%" }}>
                  <div class="card-header card-border-radius">
                    <div class="col d-flex justify-content-left">
                      <FaUserAlt
                        size={15}
                        style={{
                          marginRight: "10px",
                          alignSelf: "center",
                          color: "white",
                        }}
                      />
                      <div className="text-light">{recruiter.name}</div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="row ">
                      <div class="col col-lg-2 d-flex justify-content-center">
                        <img
                          src={recruiter.photo}
                          alt="profile-picture"
                          class="rounded-circle"
                        />
                      </div>
                      <div
                        class="col"
                        id="info-col"
                        style={{ alignSelf: "center" }}
                      >
                        <div class="row">
                          <div class="col d-flex justify-content-left">
                            <IoLocationSharp
                              size={20}
                              style={{ marginRight: "10px" }}
                            />
                            {recruiter.country}
                          </div>
                        </div>
                        <div class="row">
                          <div class="col d-flex justify-content-left">
                            <MdWork size={20} style={{ marginRight: "10px" }} />
                            {recruiter.area}
                          </div>
                        </div>
                      </div>
                      <div
                        class="col col-lg-2 d-flex justify-content-center"
                        style={{ marginRight: "10px", alignSelf: "center" }}
                      >
                        {recruiter.rating}
                        <AiFillStar
                          style={{ marginRight: "10px", alignSelf: "center" }}
                        />
                      </div>
                      <div
                        class="col col-lg-1  "
                        style={{ marginRight: "10px", alignSelf: "center" }}
                      >
                        <button class="btn btn-dark">
                          <MdOutlineAssignmentTurnedIn />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
        : ""}
    </div>
  );
}

export default SearchView;
