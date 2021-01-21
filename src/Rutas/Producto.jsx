import React, { useEffect, useState } from "react";
import CardProducto from "../Componentes/CardProducto";
import foto from "../Static/carousel/foto1.jpg";
import SubHeader from "../Componentes/SubHeader";
import Nosotros from "../Componentes/Nosotros";

import foto1 from "../Static/carousel/foto1.jpg";
import foto2 from "../Static/carousel/foto2.jpg";
import foto3 from "../Static/carousel/foto3.jpg";
import foto4 from "../Static/carousel/foto4.jpg";
import foto5 from "../Static/carousel/foto5.jpg";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext";

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
export default function Producto() {
  const { idProductos } = useParams();
  const { addToCart } = useCart();
  const [Item, setItem] = useState({});
  const handleAddToCard = () => {
    addToCart(Item);
  };

  useEffect(() => {
    (async function () {
      const { data } = await Axios.get(`/productos/${idProductos}`);
      setItem(data);
    })();
  }, [idProductos]);
  return (
    <>
      <SubHeader />
      <div className="container">
        <div className="row my-4">
          <div className="col-md-5 offset-md-1">
            <img className="img-fluid" src={Item.imagen} alt="" />
          </div>
          <div className="col-md-6">
            <div className="container ">
              <div className="row mt-5">
                <h3>{Item.descripcion}</h3>
              </div>
              <div className="row">
                <h4>
                  Disponibles:{" "}
                  <small className="text-muted">{Item.cantidad}</small>
                </h4>
              </div>
              <div className="row">
                <h5>
                  Precio: <small className="text-muted">${Item.precio}</small>
                </h5>
              </div>
              <div className="row">
                {/*  <h5>Descripcion:</h5>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati quasi eum mollitia dolor modi doloribus, dolores vel
                  quam neque consequuntur natus eveniet ipsum, exercitationem
                  libero quaerat. Cumque quidem aspernatur iure.
                </p> */}
              </div>
              <div className="row d-flex">
                <button className="btn btn-primary" onClick={handleAddToCard}>
                  Agregar a la bolsa
                </button>
                {/* <button className="btn btn-outline-primary">Ver mas</button> */}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h5 className="text-center">Lo mas popular</h5>
        <hr />
        <div className="row mb-2">
          {data2.map((item, index) => (
            <div key={index} className="col-md-3">
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
