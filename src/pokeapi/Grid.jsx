import React, { useState, useEffect } from "react";
import Card from "./Card";

function Grid() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/machop")
      .then((response) => response.json())
      .then((datos) => setData(datos.results));
  }, []);

  /*const fetchContent = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const content = await response.results;
        return content;
      }
    } catch (error) {
      console.error(error);
    }
    return "";
  };

  const updateCardWithContent = async (card, url) => {
    const content = await fetchContent(url);
    card.content = content;
  };*/

  /*console.log(item);
          const card = {
            key:item.id,
            nombre: item.name,
            image: item.sprites,
            tipo: item.types,
            species: item.species,
            habilidad: item.abilities
            
          };*/

          //updateCardWithContent(card, item.url);

  return (
    <div>
      <div className="card-grid">
        
          return (
            <Card
              key={data.id}
              //nombre={data.name}
              image={data.sprites.front_default}
              tipo={data.types}
              species={data.species}
            />
          );
        
      </div>
    </div>
  );
}

export default Grid;
