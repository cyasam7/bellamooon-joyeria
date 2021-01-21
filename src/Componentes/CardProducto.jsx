import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../Context/CartContext";
function CardProducto({ existencia, producto }) {
  const { addToCart } = useCart();

  const handleAddToCart = (prod) => () => {
    addToCart(prod);
  };

  return (
    <div className="card card-body">
      <img className="img-fluid" src={producto.imagen} alt="Sample" />
      <h5 className="card-title text-center mt-2">{`${producto.descripcion}`}</h5>
      <h6 className="card-subtitle text-center ">{`${producto.precio}`}</h6>
      <span className="mt-2 text-center">
        <button
          onClick={handleAddToCart(producto)}
          className="btn btn-sm btn-dark"
        >
          Agregar
        </button>
        <Link to={`/producto/${producto._id}`} className="btn btn-sm btn-secondary">
          Ver mas
        </Link>
      </span>
      <span
        className={`badge  mt-2 p-2 ${
          existencia ? "btn btn-outline-secondary" : "btn btn-outline-warning"
        }`}
      >
        {existencia ? "SIN EXISTENCIA" : "CON EXISTENCIA"}
      </span>
    </div>
  );
}

export default CardProducto;
