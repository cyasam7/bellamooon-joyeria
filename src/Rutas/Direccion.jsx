import React from "react";
import FormDireccion from "../Componentes/FormDireccion";

function Direccion() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-8">
          <h4>Direccion de Envio</h4>
          <FormDireccion />
        </div>
        <div className="col-md-4">
          <h5>Pedido</h5>
          <div className="container-fluid">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Cras justo odio
                <span className="badge badge-primary badge-pill">14</span>
              </li>
            </ul>
            <h5 className="mt-2">Total: $150</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Direccion;
