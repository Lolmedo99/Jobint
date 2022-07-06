import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneSearches, getOneUpDate } from "../redux/search";
import useInput from "../hooks/useInput";
import "../sass/searchCrud.scss";

export default function SearchCreate() {
  const params = useParams();
  const id = params.id;

  const country = useInput();
  const area = useInput();
  const position = useInput();
  const description = useInput();
  const vacancies = useInput();
  const jobSchedules = useInput();
  const salary = useInput();
  const title = useInput();
  const category = useInput();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  

  const editSearch = (e) => {
    e.preventDefault();
    dispatch(
      getOneUpDate({
        id,
        country,
        area,
        position,
        description,
        vacancies,
        jobSchedules,
        salary,
        title,
        category,
      })
    );
    setTimeout(() => {
      navigate("/searchs");
    }, 500);
  };

  useEffect(() => {
    dispatch(getOneSearches(id));
  }, []);

  return (
    <div class="containerr mt-4">
      <form onSubmit={editSearch} className="form-searchs">
        <h4 class="form-title">Editar busqueda</h4>
        <div className="box">
          <div className="box1">
            <div class="mb-3">
              <label for="title" class="form-label">
                Titulo
              </label>
              <input
                type="text"
                class="form-control"
                placeholder={search[0].title}
                {...title}
              />
            </div>

            <div class="mb-3">
              <label for="area_search" class="form-label">
                Área
              </label>
              <input
                type="text"
                class="form-control"
                placeholder={search[0].area}
                {...area}
              />
            </div>

            <div class="mb-3">
              <label for="position" class="form-label">
                Puesto
              </label>
              <input
                type="text"
                class="form-control"
                placeholder={search[0].position}
                {...position}
              />
            </div>

            <div class="mb-3">
              <label for="category" class="form-label">
                Categoría{" "}
              </label>
              <input
                type="text"
                class="form-control"
                placeholder={search[0].category}
                {...category}
              />
            </div>
          </div>

          <div className="box2">
            <div class="mb-3">
              <label for="vacancies" class="form-label">
                Vacantes
              </label>
              <input
                type="text"
                class="form-control"
                placeholder={search[0].vacancies}
                {...vacancies}
              />
            </div>

            <div class="mb-3">
              <label for="jobSchedules" class="form-label">
                Horarios de trabajo
              </label>
              <input
                type="text"
                class="form-control"
                placeholder={search[0].jobSchedules}
                {...jobSchedules}
              />
            </div>

            <div class="mb-3">
              <label for="salary" class="form-label">
                Remuneración
              </label>
              <input
                type="text"
                class="form-control"
                placeholder={search[0].salary}
                {...salary}
              />
            </div>

            <div className="mb-3">
              <div className="box_01">
                <div class="mb-3">
                  <label for="country" class="form-label">
                    País
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={search[0].country}
                    {...country}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="description" class="form-label">
            Descripción
          </label>

          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            placeholder={search[0].description}
            class="form-control"
            {...description}
          ></textarea>
        </div>

        <div className="box_button">
          <button type="submit" class="btn btn-danger cambios m-2">
            Guardar
          </button>
          <Link to={"/searchs"} class="btn btn-danger cancelar m-2">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}
