import React from "react";
import CardProducto from "./CardProducto";

function CategoriaProductos({ productos }) {
  return (
    <div className="container">
      <h4 className="text-center mt-3">Collares</h4>
      <div className="row">
        {productos.map((producto, index) => (
          <div key={index} className="col-md-3 mt-2 mb-4">
            <CardProducto producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriaProductos;
