import React from "react";
import { Link } from "react-router-dom";
import logo from "../Static/logos/Variante_Negri.jpg";
import { useCart } from "../Context/CartContext";
function Header() {
  const { Cart } = useCart();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary-logo">
        <div className="container d-flex align-items-center justify-content-betwen">
          <Link to="/">
            <img src={logo} width={100} className="rounded" alt="" />
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link  text-primary" to="/checkout">
                CheckOut
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link  text-primary" to="/registrar">
                Registrar
              </Link>
            </li> */}
            {Cart.length > 0 && (
              <li className="nav-item">
                <p className="nav-link  text-primary" to="/registrar">
                  Productos {" "}{Cart.length}
                </p>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
