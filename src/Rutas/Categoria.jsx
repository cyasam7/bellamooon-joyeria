import Axios from "axios";
import React, { useEffect, useState } from "react";
import CategoriaProductos from "../Componentes/CategoriaProductos";
import Nosotros from "../Componentes/Nosotros";
import SubHeader from "../Componentes/SubHeader";
import { useParams } from "react-router-dom";
export default function Categoria() {
  const [Productos, setProductos] = useState([]);
  const { idCategoria } = useParams();
  useEffect(() => {
    (async function () {
      const { data } = await Axios.get(`/productos?categoria=${idCategoria}`);
      setProductos(data);
    })();
  }, [idCategoria]);
  return (
    <>
      <SubHeader />
      <CategoriaProductos productos={Productos} />
      <hr />
      <Nosotros />
    </>
  );
}
