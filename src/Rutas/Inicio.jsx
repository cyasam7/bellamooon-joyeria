import React from "react";
import CardProducto from "../Componentes/CardProducto";
import MainCarousel from "../Componentes/MainCarousel";
import Nosotros from "../Componentes/Nosotros";
import SubHeader from "../Componentes/SubHeader";
import pulsera from "../Static/carousel/pulsera.png";

/* Images */
import arete from "../Static/carousel/arete.png";
import argolla from "../Static/carousel/argolla.png";
import arracada from "../Static/carousel/arracada.png";
import collar from "../Static/carousel/collar.png";

import foto1 from "../Static/carousel/foto1.jpg";
import foto2 from "../Static/carousel/foto2.jpg";
import foto3 from "../Static/carousel/foto3.jpg";
import foto4 from "../Static/carousel/foto4.jpg";
import foto5 from "../Static/carousel/foto5.jpg";

const data = [
  {
    descripcion: "Arete",
    precio: 120,
    imagen: arete,
  },
  {
    descripcion: "Argolla",
    precio: 90,
    imagen: argolla,
  },
  {
    descripcion: "Arracada",
    precio: 75,
    imagen: arracada,
  },
  {
    descripcion: "Collar",
    precio: 90,
    imagen: collar,
  },
];
const data2 = [
  {
    descripcion: "Collares de oro",
    precio: 120,
    imagen: foto1,
  },
  {
    descripcion: "Anillos Plateados",
    precio: 130,
    imagen: foto2,
  },
  {
    descripcion: "Estuche",
    precio: 210,
    imagen: foto4,
  },
  {
    descripcion: "Aretes de oro",
    precio: 150,
    imagen: foto5,
  },
];

function Inicio() {
  return (
    <>
      <SubHeader />
      <MainCarousel />
      <div className="container">
        <h3 className="text-center mt-4 ">Nuevos productos</h3>
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-md-4 mt-2 mb-4">
              <CardProducto producto={item} />
            </div>
          ))}
        </div>
      </div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pulsera} className="d-block w-100" alt="..." />
          </div>
        </div>
        <div className="overlay">
          <div className="container">
            <div className="row align-items-center">
              <h1 className="display-5 text-white">
                "La joyería tiene el poder de ser la única cosa que te hace
                sentir única"
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="text-center mt-4 ">Lo mas popular</h3>
        <div className="row">
          {data2.map((item, index) => (
            <div key={index} className="col-md-3 mt-2 mb-4">
              <CardProducto producto={item} />
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="container">
        <Nosotros />
      </div>
    </>
  );
}

export default Inicio;
