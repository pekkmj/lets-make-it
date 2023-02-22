import React from "react";
import IngredientTile from "./IngredientTile";

const UserTile = ({user, setUser, currentUser}) => {
  const {username, ingredients} = user

  const ingredientList = ingredients.map((ingredient)=>{
    return (
      <IngredientTile
        key={ingredient.name}
        ingredient={ingredient}
        user={user}
        setUser={setUser}
        currentUser={currentUser}
      />
    )
  })

  return (
    <div className="grid-container profile-body">
      <h1 className="plain-title">{username}'s pantry</h1>
      <ul className="ingredient-list grid-x margin-x">{ingredientList}</ul>
    </div>
  )
}

export default UserTile