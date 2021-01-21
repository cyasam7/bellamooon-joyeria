import React from "react";

function FormRegistrar() {
  return (
    <form>
      <div className="form-group">
        <input type="text" placeholder="Usuario" className="form-control" />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Correo" className="form-control" />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Contraseña"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Confirmar contraseña"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary">Registrar</button>
      </div>
    </form>
  );
}

export default FormRegistrar;
