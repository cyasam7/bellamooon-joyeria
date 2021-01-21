import React from "react";
import { Link } from "react-router-dom";

function Metodo() {
  return (
    <div className="container">
      <div className="row mt-2">
        <h3 className="text-center">
          Seleccione el metodo de pago que desea utilizar
        </h3>
        <div className="col-12">
          <div className="card card-body">
            <h3>DEPOSITO / TRANSFERENCIA</h3>
          </div>
        </div>
        <div className="col-12">
          <div className="card card-body">
            <h3>TARJETA DE CREDITO</h3>
          </div>
        </div>
        <div className="col-12">
          <div className="card card-body">
            <h3>PAYPAL</h3>
          </div>
        </div>
        <div className="col-12">
          <div className="card card-body">
            <Link to="/checkout/direccion/metodo/terminado">Siguiente</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metodo;
