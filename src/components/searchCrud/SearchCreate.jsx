import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import "../../style/searchCrud.scss";

export default function SearchCreate() {
  const navigate = useNavigate();

  const country = useInput();
  const area_search = useInput();
  const position = useInput();
  const description = useInput();
  const vacancies = useInput();
  const jobSchedules = useInput();
  const salary = useInput();
  const title = useInput();
  const category = useInput();

  const createSearch = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/search/add", {
        country: country.value,
        area_search: area_search.value,
        position: position.value,
        description: description.value,
        vacancies: vacancies.value,
        jobSchedules: jobSchedules.value,
        salary: salary.value,
        title: title.value,
        category: category.value,
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));

    navigate("/admin/searchs");
  };

  return (
    <div class="container mt-4">
      <div class="card border-secondary ">
        <div class=" card-header form-title">NUEVO REGISTRO</div>
        <div class="card-body">
          <form onSubmit={createSearch} className="">
            <div className="flex">
              <div className="box_01">
                <div class="mb-3">
                  <label for="country" class="form-label">
                    País
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Escriba un País"
                    {...country}
                  />
                </div>

                <div class="mb-3">
                  <label for="area_search" class="form-label">
                    Área
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Area de trabajo"
                    {...area_search}
                  />
                </div>

                <div class="mb-3">
                  <label for="position" class="form-label">
                    Posicion
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Posicion en la Empresa"
                    {...position}
                  />
                </div>

                <div class="mb-3">
                  <label for="jobSchedules" class="form-label">
                    Horarios de trabajo
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Ej 08:00 - 17:00 Hs"
                    {...jobSchedules}
                  />
                </div>
              </div>
              <div className="box_02">
                <div class="mb-3">
                  <label for="vacancies" class="form-label">
                    Vacantes
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nùmero de vacantes"
                    {...vacancies}
                  />
                </div>

                <div class="mb-3">
                  <label for="salary" class="form-label">
                    Sueldo
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="$"
                    {...salary}
                  />
                </div>

                <div class="mb-3">
                  <label for="title" class="form-label">
                    Titulo
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Ej: Empleado administrativo"
                    {...title}
                  />
                </div>

                <div class="mb-3">
                  <label for="category" class="form-label">
                    Categoria{" "}
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="cateroria"
                    {...category}
                  />
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="description" class="form-label">
                Description
              </label>

              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                placeholder="Escriba aquí..."
                class="form-control"
                {...description}
              ></textarea>
            </div>

            <div className="box_button">
              <button type="submit" class="btn btn-primary m-2">
                Guardar
              </button>

              <Link to={"/admin/searchs"} class="btn btn-outline-warning m-2">
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
