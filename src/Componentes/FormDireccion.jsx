import React from "react";
import { Link } from "react-router-dom";

function FormDireccion() {
  return (
    <form>
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Nombre" />
      </div>
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Apellido" />
      </div>
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Email" />
      </div>
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Telefono" />
      </div>
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Telefono #2" />
      </div>
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Calle" />
      </div>
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Numero" />
      </div>
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Colonia" />
      </div>
      <div className="form-group">
        <input className="form-control" type="text" placeholder="CP" />
      </div>
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Ciudad" />
      </div>
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Estado" />
      </div>
      <div className="form-group">
        <textarea className="form-control" placeholder="Detalles adicionales sobre la compra" rows="3"></textarea>
      </div>
      <div className="form-group d-flex justify-content-end">
        <Link to="/checkout/direccion/metodo" className="btn btn-success">Continuar</Link>
      </div>
    </form>
  );
}

export default FormDireccion;
