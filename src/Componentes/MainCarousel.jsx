import React from "react";
import arete from "../Static/carousel/arete.png";
import collar from "../Static/carousel/collar.png";
import arracada from "../Static/carousel/arracada.png";
function MainCarousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={arete} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="text-white">
              El estilo es la manera de decir quien eres.
            </h2>
          </div>
        </div>
        <div className="carousel-item">
          <img src={arracada} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="text-white">
              Las palabras del amor se las lleva el viento, pero las joyas se quedan para siempre.
            </h2>
          </div>
        </div>
        <div className="carousel-item">
          <img src={collar} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="text-white">
              El valor sentimental de una joya se mide por los recuerdos que conservamos de ella.
            </h2>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default MainCarousel;
