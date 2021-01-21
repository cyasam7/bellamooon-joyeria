import React from "react";

function FormLogin() {
  return (
    <form>
      <div className="form-group">
        <input type="email" placeholder="Correo" className="form-control" />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Contraseña"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary">Iniciar</button>
      </div>
    </form>
  );
}

export default FormLogin;
