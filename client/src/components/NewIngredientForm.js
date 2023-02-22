import React, { useEffect, useState } from "react";
import ErrorList from "./layout/ErrorList.js";

const NewIngredientFrom = ({currentUser, addNewIngredient, user}) => {

  const emptyNewIngredient = {
    userId: currentUser.id,
    name: ''
  }
  const [newIngredient, setNewIngredient] = useState(emptyNewIngredient)
  const [madeIngredients, setMadeIngredients] = useState([])
  const [errors, setErrors] = useState({})

  const getIngredients = async () =>{
    try {
      const response = await fetch("/api/v1/ingredients")
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setMadeIngredients(body)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect (()=> {
    getIngredients()
  }, [])

  const handleInputChange = (event) => {
    setNewIngredient({
      ...newIngredient,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const [ingredientAdded, result] = await addNewIngredient(newIngredient)
    if (!ingredientAdded) {
      setErrors(result)
    }

    setNewIngredient(emptyNewIngredient)
  }

  return (
    <>
      <h4>Add an Ingredient:</h4>
      <ErrorList errors={errors} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" value={newIngredient.name} onChange={handleInputChange} />
        </label>

        <input type="submit" className="button" />
      </form>
    </>
  )

}

export default NewIngredientFrom