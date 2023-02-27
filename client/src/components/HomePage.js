import React, { useState } from "react";
import { Redirect } from "react-router-dom"

const HomePage = () =>{

  const emptyField = {
    list: ''
  }
  const [ingredientInput, setIngredientInput] = useState(emptyField)
  const [ingredientList, setIngredientList] = useState("")
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [random, setRandom] = useState(false)

  const handleInputChange = (event) => {
    setIngredientInput({
      ...ingredientInput,
      list: event.currentTarget.value
    })
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    setIngredientList(ingredientInput.list)
    setShouldRedirect(true)
  }

  const handleRandom = (event) =>{
    event.preventDefault()
    setRandom(true)
  }

  if (shouldRedirect){
    return <Redirect to={`/recipes?ingredients=${ingredientList}`} />
  }

  if(random){
    return <Redirect to={`/recipes`} />
  }

  return (
    <div className="landing-page-container">
      <h1 className="home-title">What Are You Craving?</h1>
      <div className="grid-container home-form">
        <form onSubmit={handleSubmit}>
          <input type="text" list={ingredientInput.list} className="input-field" onChange={handleInputChange} />
          <p className="search-advice">For best results, separate each ingredient with a comma ( , )</p>
          <div className="home-buttons">
            <input type="submit" className="button left-button" />
            <button className="button" onClick={handleRandom}>Random</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HomePage