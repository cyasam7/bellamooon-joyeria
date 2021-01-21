import React from "react";

function CardNosotros({ item }) {
  return (
    <div className="col-md-3">
      <div className="text-center card-body">
        <img src={item.foto} alt="" />
        <p className="mt-2 text-center">{item.title}</p>
      </div>
    </div>
  );
}

export default CardNosotros;
