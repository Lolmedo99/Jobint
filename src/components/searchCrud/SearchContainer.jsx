import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sendAllSearches } from "../../redux/search";
import SearchItem from "./SearchItem";

export default function CrudSearch() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search) || undefined;

  useEffect(() => {
    dispatch(sendAllSearches());
  }, []);

  console.log(search);

  return (
    <>
      <h1 class="text-center">Adminitracion de Publicaciones</h1>
      <div class="container">
        <Link to={"/admin/searchs/create"} class="btn btn-outline-primary mt-4">
          <i class="bx bxs-plus-circle bx-md ">X</i>
        </Link>

        <table class="table table-bordered table-striped text-center mt-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">TITULO</th>
              <th scope="col">PAIS</th>
              <th scope="col">AREA</th>
            </tr>
          </thead>

          <tbody>
            {search?.map((itemBusqueda, index) => {
              return <SearchItem itemBusqueda={itemBusqueda} index={index} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
