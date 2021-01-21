import React from "react";
import services1 from "../Static/carousel/services1.svg";
import services2 from "../Static/carousel/services2.svg";
import services3 from "../Static/carousel/services3.svg";
import services4 from "../Static/carousel/services3.svg";
import CardNosotros from "./CardNosotros";
function Nosotros() {
  const data = [
    {
      title: "Envios rapidos y seguros.",
      foto: services1,
    },
    {
      title: "Transferencias rápidas y previsibles a tus cuentas bancarias.",
      foto: services2,
    },
    {
      title: "Pagos internacionales.",
      foto: services3,
    },
    {
      title: "Paga en efectivo.",
      foto: services4,
    },
  ];
  return (
    <div className="row py-4">
      {data.map((item, index) => (
        <CardNosotros key={index} item={item} />
      ))}
    </div>
  );
}

export default Nosotros;
