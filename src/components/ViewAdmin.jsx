import React, { useState } from "react";
import { VscTrash } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";
import { useEffect } from "react";
import CardsAdmin from "./CardsAdmin";
import "../style/viewAdmin.scss";

const ViewAdmin = () => {
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
  const areas = [
    "Administración",
    "Comercial",
    "Producción",
    "Tecnología",
    "Logística",
    "Gastronomía",
    "Recursos Humanos",
    "Salud",
    "Ingenierías",
    "Atención al Cliente",
    "Marketing",
    "Construcción",
    "Comercio Exterior",
  ];

  const ranking = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  const reclutadores = [
    {
      nombre: "Juan Peréz",
      cantidad: 10,
      rank: 90,
      country: "Argentina",
      area: "Construcción",
    },
    {
      nombre: "Chocolates havana",
      cantidad: 100,
      rank: 50,
      country: "Chile",
      area: "Ingenierías",
    },
    {
      nombre: "hdfkahksjf",
      cantidad: 5,
      puntaje: 5.5,
      rank: 70,
      country: "Colombia",
      area: "Salud",
    },
    {
      nombre: "Pepe Rios",
      cantidad: 3,
      rank: 60,
      country: "Chile",
      area: "Construcción",
    },
  ];

  const [selectedCountry, setSelectedContry] = useState("");
  const [jobArea, setJobArea] = useState("");
  const [value, setValue] = useState("");

  const handlerClick = (e) => {
    setValue(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedContry(e.target.value);
  };
  const handleJobAreaChange = (e) => {
    setJobArea(e.target.value);
  };

  const handleReset = () => {
    setValue("");
    setSelectedContry("");
    setJobArea("");
    setRanking("");
  };

  return (
    <div className="container-xxl">
      <div className="card-busqueda">
        <div className="card-body">
          <div className="input-group mb-3">
            <button className="btn btn-dark" type="button" id="button-addon1">
              <BsSearch />
            </button>
            <form>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Nombre o Apellido"
                aria-label="Search"
                onChange={handlerClick}
              />
            </form>

            <select
              className="form-select"
              aria-label="Default select example"
              placeholder="Pais"
              onChange={handleCountryChange}
            >
              <option value={""}>Pais</option>
              {paises.map((pais, i) => {
                return <option key={i}>{pais}</option>;
              })}
            </select>

            <select
              className="form-select"
              aria-label="Default select example"
              placeholder="Área"
              onChange={handleJobAreaChange}
            >
              <option value={""}>Área</option>
              {areas.map((area, i) => {
                return (
                  <option value={area.area} key={i}>
                    {area}
                  </option>
                );
              })}
            </select>

            <button
              className="btn btn-dark"
              type="button"
              id="button-addon2"
              onClick={handleReset}
            >
              <VscTrash />
            </button>
          </div>
        </div>
      </div>

      <div className="card-titulos">
        <div className="card-body">
          <div className="row fila-titulos">
            <div className="col-lg-4">
              <h5 className="title-admin">Reclutador</h5>
            </div>
            <div className="col-lg-3">
              <h5 className="title-admin">Ranking</h5>
            </div>
            <div className="col-lg-2">
              <h5 className="title-admin">Bus. Asignadas</h5>
            </div>
            <div className="col-lg-3">
              <h5 className="title-admin">Permisos</h5>
            </div>
          </div>
        </div>
      </div>
      <hr className="linea" />

      <div>
        {reclutadores
          .sort((x, y) => {
            if (x.rank < y.rank) {
              return 1;
            }
            if (x.rank > y.rank) {
              return -1;
            }
            return 0;
          })
          .filter((val) => {
            if (value === "") {
              return val;
            } else if (
              val.nombre.toLowerCase().includes(value.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .filter((val) => {
            if (jobArea === "") {
              return val;
            } else if (val.area === jobArea) {
              return val;
            }
          })
          .filter((val) => {
            if (selectedCountry === "") {
              return val;
            } else if (val.country === selectedCountry) {
              return val;
            }
          })
          .filter((val) => {
            if (selectedCountry === "") {
              return val;
            } else if (val.country === selectedCountry) {
              return val;
            }
          })
          .map((items, i) => {
            return (
              <div key={i}>
                <CardsAdmin items={items} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ViewAdmin;
