import React from "react";
import { Link } from "react-router-dom";
import logo from "../Static/logos/BellaMoon_Blanco.png";
function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4 bg-primary">
      <div className="container">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-5 mt-md-0 mt-3 ">
              <img src={logo} width={150} alt="logo" />
              <p>
                Here you can use rows and columns to organize your footer
                content.
              </p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-3 mb-md-0 mb-3">
              <ul className="list-unstyled">
                <li>
                  <Link to="/politica-devolucion">
                    <p className="text-white">Politica de devolucion</p>
                  </Link>
                </li>
                <li>
                  <Link to="/terminos-y-condicion">
                    <p className="text-white">Termino y Condiciones</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white">Collares</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Aretes</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Tobilleras</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Anillos</a>
                </li>
              </ul>
            </div>
            <div className="col-md-1 mb-md-0 mb-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/"> BellaMoonJewerly.com</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
