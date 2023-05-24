import React from "react";
import { CardOne } from "./CardOne";
import img1 from "./img/coca.jpg";
import img2 from "./img/postobon.png";
import img3 from "./img/redbull.jpeg";



const productos = [
  {
    id:1, 
    nombre:"Coca-cola",
    precio:4700,
    image: img1
  },
  {
    id:2, 
    nombre:"Postobon",
    precio:3700,
    image: img2
  },
  {
    id:3, 
    nombre:"Redbull",
    precio:6800,
    image: img3
  }
]
 
export const CardsEnd = () => {
  console.log(productos);

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {
        productos.map(Pro => ( 
          <div className="col-md-4 " key={Pro.id}>
          <CardOne title={Pro.nombre} ImgPro={Pro.image}/>
        </div>
        ))
       }
      </div>
    </div>
  );
};
