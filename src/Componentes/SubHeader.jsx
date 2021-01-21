import React from "react";
import { Link } from "react-router-dom";
import { useInitiPage } from "../Context/CategoriasContext";
function SubHeader() {
  const { Categorias } = useInitiPage();

  return (
    <div className="navbar navbar-expand-lg border-bottom">
      <div className="container d-flex justify-content-center">
        <ul className="navbar-nav">
          {Categorias.map((item, index) => (
            <Link
              className="nav-item"
              key={index}
              to={`/categoria/${item._id}`}
            >
              {item.nombre}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SubHeader;
