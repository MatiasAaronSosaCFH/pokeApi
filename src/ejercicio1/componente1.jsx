import React from 'react';

export default function Main(){
    const estilo_h1 = {
        "backgroundColor":"blue"
    };
    const estilo_p ={
        "color":"crimson"
    };
    return(
        <>
        <h1 style={estilo_h1}>Esta es mi pagina web</h1>

        <p style={estilo_p}>En esta pagina esta toda la informacion 
        de las tecnologias que conosco</p>
        </>
        
    );
}


function Card(props) {
    return (
      <div className="card">
        <img src={props.image} alt={props.title} />
        <div className="card-content">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <p>Precio: ${props.price}</p>
          <button onClick={props.onClick}>Comprar</button>
        </div>
      </div>
    );
  }

  (
    {
        "title":"titulo",
        "descripcion":"Esta es una descripcion de la card",
        "price":"400"
    }
  )