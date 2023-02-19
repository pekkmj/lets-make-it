import React from "react";
import IngredientTile from "./IngredientTile";

const UserTile = ({user}) => {
  const {username, ingredients} = user

  const ingredientList = ingredients.map((ingredient)=>{
    return (
      <IngredientTile
        key={ingredient.name}
        ingredient={ingredient}
      />
    )
  })

  return (
    <div>
      <h1>{username}</h1>
      <h3>{username}'s pantry</h3>
      <ul>{ingredientList}</ul>
    </div>
  )
}

export default UserTile