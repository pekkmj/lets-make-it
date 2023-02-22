import React, { useEffect, useState } from "react";
import ErrorList from "./layout/ErrorList.js"
import translateServerErrors from "../services/translateServerErrors.js";
import UserTile from "./UserTile.js";
import NewIngredientFrom from "./NewIngredientForm.js";

const ProfilePage = ({currentUser, ...props }) =>{
  const [user, setUser] = useState({ ingredients: []})
  const [errors, setErrors] = useState({})
  const [ingredientForm, setIngredientForm] = useState(false)
  const { username } = props.match.params

  const getUser = async () => {
    try {
      const response = await fetch(`/api/v1/users/${username}`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setUser(body.user)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const addNewIngredient = async (formData) => {
    try {
      const response = await fetch('/api/v1/ingredients', {
        method: "POST",
        headers: new Headers ({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({ formData })
      })
      if (!response.ok) {
        if (response.status === 422) {
          const errorBody = await response.json()
          const newErrors = translateServerErrors(errorBody.errors)
          return setErrors(newErrors)
        }
        throw new Error(`${response.status} ${response.statusText}`)
      } else {
        const body = await response.json()
        const addedIngredient = body.ingredient
        setUser({...user, ingredients: [...user.ingredients, addedIngredient] })
        setErrors({})
        return [true, addedIngredient]
      }
    } catch (error) {
      console.error(`Fetch post error: ${error.name} ${error.message}`)
    }
  } 

  useEffect(() => {
    getUser()
  }, [])

  let newIngredientForm
  let ingredientButton
  if(currentUser && document.URL.includes(currentUser.username)){
    const handleClick = () => {
      if(ingredientForm === false){
        setIngredientForm(true)
      } else {
        setIngredientForm(false)
      }
    }
    ingredientButton = <button className="button add-ingredient" onClick={handleClick}>Add Ingredient</button>
  }

  if(ingredientForm === true){
    newIngredientForm = <NewIngredientFrom 
      username={username}
      currentUser={currentUser}
      addNewIngredient={addNewIngredient}

    />
  }

  return (
    <div className="page-body">
      <UserTile
        user={user}
        setUser={setUser}
        currentUser={currentUser}
      />
      <div className="ingredient-form">
        {ingredientButton}
        <ErrorList errors={errors} />
        {newIngredientForm}
      </div>
    </div>
  )
}

export default ProfilePage