import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { MdWork } from "react-icons/md";

import perfil from "../assets/profiles/perfil2.png";
import SearchCard from "./SearchCard";
import "../style/profile.scss";

const Profile = () => {
  //axios para tomar la data

  return (
    <div>
      <div align="center">
        <h1 className="titleProfile">Name</h1>
        <div>
          <img class="profileImg" src={perfil}></img>
          <h2> Rating </h2>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
            voluptas! Beatae, dignissimos at odit sit autem ad distinctio nisi
            fuga neque! Repellat quam doloremque alias nihil sint cupiditate,
            aspernatur soluta.
          </span>
        </div>
        <div align="center" className="description">
          <ul>
            <li>
              <FaBuilding size={60} /> Data
            </li>
            <li>
              <IoLocationSharp size={60} /> Pais
            </li>
            <li>
              <MdWork size={60} /> Area
            </li>
          </ul>
        </div>
        <br></br>
      </div>
      <div class="mt-4">
        <h2 className="h2profile" align="center">
          Busquedas activas
        </h2>
        <div class="col">
          <SearchCard country={"argentina"} area={"produccion"} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
