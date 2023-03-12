import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


const IngredientTile = ({ingredient, user, setUser, currentUser}) =>{
  const {name} = ingredient

  const deleteIngredient = async () =>{
    try {
      const response = await fetch(`/api/v1/ingredients/${name}`, {
        method: "delete",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw (error)
      }
      const filteredIngredients = user.ingredients.filter(ingredient => ingredient.name !== name)
      setUser({
        ...user,
        ingredients: filteredIngredients
      })
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  } 

  let xMark
  if (currentUser && document.URL.includes(currentUser.username)){
    xMark = <FontAwesomeIcon icon={faXmark} onClick={deleteIngredient} />
  }

  const lowerName = name.toLowerCase()
  
  return (
    <div className="ingredient cell small-6 medium-4 large-4">
      <p>{lowerName} {xMark}</p>
    </div>
  )
}

export default IngredientTile