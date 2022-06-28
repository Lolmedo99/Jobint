import React from "react";
import { Link } from "react-router-dom";

export default function SearchItem({ itemBusqueda, index }) {
  console.log(itemBusqueda);

  return (
    <tr>
      <td>{index}</td>
      <td>{itemBusqueda.title}</td>
      <td>{itemBusqueda.country}</td>
      <td>{itemBusqueda.area_search}</td>

      <td>
        <Link to={`/admin/searchs/update/${itemBusqueda.id}`} class="btn btn-outline-warning m-2">
          Editar
        </Link>

        <a href="/delete/<%= cliente.id %>" class="btn btn-outline-danger m-1">
          Eliminar
        </a>
      </td>
    </tr>
  );
}
