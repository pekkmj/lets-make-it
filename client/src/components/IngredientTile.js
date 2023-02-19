import React from "react";

const IngredientTile = ({ingredient}) =>{
  const {name} = ingredient
  
  return <p>{name}</p>
}

export default IngredientTile