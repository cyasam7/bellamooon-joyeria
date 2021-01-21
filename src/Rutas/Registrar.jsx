import React from "react";
import FormLogin from "../Componentes/FormLogin";
import FormRegistrar from "../Componentes/FormRegistrar";

function Registrar() {
  return (
    <div className="container mt-4">
      <hr />
      <div className="row">
        <div className="col-md-6 col-sm">
          <h4>Inicia Sesion</h4>
          <hr />
          <p>Bienvenido, puedes iniciar sesion.</p>
          <FormLogin />
        </div>
        <div className="col-md-6">
          <h4>Crear una nueva cuenta</h4>
          <hr />
          <p>
            Create tu cuenta con tu usuario, correo electrónico y contraseña.
          </p>
          <FormRegistrar />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Registrar;
