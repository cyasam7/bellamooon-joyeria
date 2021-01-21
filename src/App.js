import React from "react";
import {
  BrowserRouter as ElGranjero,
  Route as Huevos,
  Switch as PapadeLosPollitos,
} from "react-router-dom";

import Inicio from "./Rutas/Inicio";
import Categoria from "./Rutas/Categoria";
import Producto from "./Rutas/Producto";
import Registrar from "./Rutas/Registrar";
import CheckOut from "./Rutas/Checkout";

import Layout from "./Componentes/Layout";
import PoliticaDevolucion from "./Rutas/PoliticaDevolucion";
import TerminoCondicion from "./Rutas/TerminoCondicion";
import Direccion from "./Rutas/Direccion";
import Metodo from "./Rutas/Metodo";
import Terminado from "./Rutas/Terminado";

import {initialAxios} from './Helper/Axios'

//Context
import {InitPageProvider} from './Context/CategoriasContext'
import {CartProvider} from './Context/CartContext'

initialAxios();

function App() {
  return (
    <InitPageProvider>
      <CartProvider>
        <ElGranjero>
          <Layout>
            <PapadeLosPollitos>
              <Huevos exact path="/" component={Inicio} />
              <Huevos exact path="/registrar" component={Registrar} />
              <Huevos exact path="/categoria/:idCategoria" component={Categoria} />
              <Huevos exact path="/producto/:idProductos" component={Producto} />
              <Huevos exact path="/checkout" component={CheckOut} />
              <Huevos exact path="/checkout/direccion" component={Direccion} />
              <Huevos exact path="/checkout/direccion/metodo" component={Metodo} />
              <Huevos exact path="/checkout/direccion/metodo/terminado" component={Terminado} />
              <Huevos exact path="/politica-devolucion" component={PoliticaDevolucion} />
              <Huevos exact path="/terminos-y-condicion" component={TerminoCondicion} />
            </PapadeLosPollitos>
          </Layout>  
        </ElGranjero>
      </CartProvider>
    </InitPageProvider>
  );
}

export default App;
