import React from "react";
import { MdDelete } from "react-icons/md";

import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
function Checkout() {
  const { Cart, deleteToCart, submiteCart } = useCart();
  const history = useHistory();
  const handleDeleteItem = (index) => () => {
    deleteToCart(index);
  };
  
  const handleComprar = () => {
    if (Cart.length <= 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No tienes nada dentro del carrito de comprar",
        /* footer: "<a href>Why do I have this issue?</a>", */
      });
      return;
    }
    submiteCart().then(() => {
      history.push("/");
      Swal.fire({
        icon: 'success',
        title: 'Se ha realizado la compra',
        showConfirmButton: false,
        timer: 1500
      })
    });
  };
  return (
    <div className="container mb-4">
      <br />
      {/* <div className="row d-flex justify-content-end">
        <button className="btn btn-danger" /* onClick={handleDeleteAll} >
          Vaciar carrito de compras
        </button>
      </div> */}
      <div className="row mt-2">
        <div className="col">
          <div className="table-responsive border mb-2">
            <table className="table">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Descripcion de producto</th>
                  <th>Precio unitario</th>
                  <th>Precio total</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {Cart.map((item, index) => (
                  <tr key={index}>
                    <th>
                      <img width={75} src={item.imagen} alt="imagen" />
                    </th>
                    <th>{item.descripcion}</th>
                    <th>${item.precio}</th>
                    <th>${item.precio}</th>
                    <th>
                      <button
                        className="btn btn-danger"
                        onClick={handleDeleteItem(index)}
                      >
                        <MdDelete size={18} color="white" />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-6">
          <div class="card">
            <div class="card-body">
              <div className="container text-center">
                <div className="row mb-3">
                  <div className="col-6">SUBTOTAL</div>
                  <div className="col-6">
                    $
                    {Cart.reduce(
                      (acum, obj) => (acum = acum + obj.precio),
                      0.0
                    )}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">ENVIO</div>
                  <div className="col-6">$150</div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">SEGURO DE ENVIO</div>
                  <div className="col-6">$99.99</div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">TOTAL (IVA INCLUIDO)</div>
                  <div className="col-6">
                    $
                    {Cart.reduce(
                      (acum, obj) => (acum = acum + obj.precio),
                      0.0
                    ) +
                      150 +
                      99.99}
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-center">
              <label class="form-check-label">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  disabled=""
                />
                Aceptar{" "}
                <Link to="/terminos-y-condicion">Terminos y Condiciones</Link>
              </label>
            </div>
            <div class="card-footer d-flex justify-content-center">
              <button
                onClick={handleComprar}
                className="btn btn-block btn-success"
              >
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
