import React from 'react';
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <ul className="nav">
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={"/"}>Inicio</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"/categoria/hombre"}>Ropa de Hombre</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"/categoria/mujer"}>Ropa de Mujer</Link>
        </li>
    </ul>
  );
}

export default NavBar;