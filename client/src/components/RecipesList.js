import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup';

const RecipesList = ({currentUser, ...props}) =>{

  const ingredientsLink = props.location.search

  const baseUrl = `/api/v1/recipes${ingredientsLink}`
  const [recipes, setRecipes] = useState([])
  const [user, setUser] = useState({ ingredients: []})
  const [pageLink, setPageLink] = useState(baseUrl)
  const [ingredients, setIngredients] = useState([])
  const [popupOpen, setPopupOpen] = useState(false)
  const [ingredientListDisplay, setIngredientListDisplay] = useState([])


  const getRecipes = async () =>{
    const onlyRecipes = []
    try {
      const response = await fetch(pageLink)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      for (const data in body.recipes.hits){
        const details = body.recipes.hits[data]
        for (const key in details){
          if (key === 'recipe'){
            onlyRecipes.push(details[key])
          }
        }
      }
      setRecipes(onlyRecipes)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const getUser = async () => {
    try {
      const response = await fetch(`/api/v1/users/${currentUser.username}`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setUser(body.user)
      setIngredients(body.user.ingredients)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const recipeInfo = recipes.map((recipe)=>{
    let relateCounter = 0   
    const ingredientNames = recipe.ingredients.map((ingredient)=>{
      return ingredient.food
    })
    const filteredIngredients = [...new Set(ingredientNames)].sort()
    const ingredientList = filteredIngredients.map((name)=>{
      const lowerName = name.toLowerCase()
      let ingredient
      const names = []
      for (const ingredient in ingredients) {
        const details = ingredients[ingredient]
        names.push(details.name)
      }
      const splitWord = lowerName.split(" ")
      if (splitWord.length > 1){
      let areRelated = false;
        if (names.includes(lowerName)){
          ingredient = <ul key={name} className="selected cell small-12 medium-6 large-5 overlay-ingredient">{lowerName}</ul>
          relateCounter = relateCounter + 1
          return ingredient
        } else {
          for (let i = 0; i < names.length; i++) {
            const ingredientNames = names[i].split(" ");
            for (let j = 0; j < splitWord.length; j++) {
              const splitTerm = splitWord[j];
              for (let k = 0; k < ingredientNames.length; k++) {
                const ingredient = ingredientNames[k];
                if (splitTerm === ingredient) {
                  areRelated = true;
                  break;
                }
              }
              if (areRelated) {
                break;
              }
            }
            if (areRelated) {
              break;
            }
          }
          if (areRelated) {
            ingredient = <ul key={name} className="semi-selected cell small-12 medium-6 large-5 overlay-ingredient">{lowerName}</ul>
            relateCounter = relateCounter + 0.5
  
          } else {
            ingredient = <ul key={name} className="unselected cell small-12 medium-6 large-5 overlay-ingredient">{lowerName}</ul>
          }
          return ingredient
        }
      }
    })    
    const handlePopupOpen = () =>{
      setPopupOpen(true)
      setIngredientListDisplay(ingredientList)
    }

    const handlePopupClose = () =>{
      setPopupOpen(false)
    }

    if (relateCounter >= 5) {
      return (
        <div key={recipe.label} className="cell small-12 medium-4 large-3 recommend grid-container">
        <h3 className="recipe-title">{recipe.label}</h3>
          <img src={recipe.image} className="food-image"/>
          <Popup open={popupOpen}  onClose={handlePopupClose}>
            <div className="overlay">
              <div className="popup-container" onClick={handlePopupClose}>
                <ul className="grid-x grid-margin-x grid-container">
                  {ingredientListDisplay}
                </ul>
              </div>
            </div>
          </Popup>
          <div className="center">
            <a className="button recipe-link" onClick={handlePopupOpen}>Ingredients</a>
            <a href={recipe.url} target="_blank" className="button recipe-link">Recipe</a>
          </div> 
        </div>
      ) 
    } else if (relateCounter > 1.5 && relateCounter < 5){
        return (
          <div key={recipe.label} className="cell small-12 medium-4 large-3 semi-recommend grid-container">
          <h3 className="recipe-title">{recipe.label}</h3>
            <img src={recipe.image} className="food-image"/>
            <Popup open={popupOpen}  onClose={handlePopupClose}>
              <div className="overlay">
                <div className="popup-container" onClick={handlePopupClose}>
                  <ul className="grid-x grid-margin-x grid-container">
                    {ingredientListDisplay}
                  </ul>
                </div>
              </div>
            </Popup>
            <div className="center">
              <a className="button recipe-link" onClick={handlePopupOpen}>Ingredients</a>
              <a href={recipe.url} target="_blank" className="button recipe-link">Recipe</a>
            </div>        
          </div>
        ) 
    } else {
        return (
          <div key={recipe.label} className="cell small-12 medium-4 large-3 available grid-container">
          <h3 className="recipe-title">{recipe.label}</h3>
            <img src={recipe.image} className="food-image"/>
              <Popup open={popupOpen}  onClose={handlePopupClose}>
                <div className="overlay">
                  <div className="popup-container" onClick={handlePopupClose}>
                    <ul className="grid-x grid-margin-x grid-container">
                      {ingredientListDisplay}
                    </ul>
                  </div>
                </div>
              </Popup>
            <div className="center">
              <a className="button recipe-link" onClick={handlePopupOpen}>Ingredients</a>
              <a href={recipe.url} target="_blank" className="button recipe-link">Recipe</a>
            </div>      
          </div>
        ) 
    }
  })

  const handleClick = () =>{
    getRecipes()
  }
  
  if (currentUser) {
    useEffect(()=>{
      getRecipes()
      getUser()
    }, [])

    return (
      <div className="grid-container">
        <h1 className="recipe-header">Welcome {user.username}</h1>
        <h6 className="recipe-subheader">Powered by <a target="_blank" href="https://www.edamam.com/" className="edamam-link">Edamam</a></h6>
        <div className="grid-x grid-margin-x">
          {recipeInfo}
        </div>
        <div className="center">
          <button type="button" className="button reroll" onClick={handleClick}>Reroll Recipes</button> 
        </div>
      </div>
    )
  } else {
    useEffect(()=>{
      getRecipes()
    }, [])

    return (
      <div className="grid-container">
        <h3 className="recipe-header">Sign in to get the full experience!</h3>
        <h6 className="recipe-subheader">Powered by <a href="https://www.edamam.com/" className="edamam-link">Edamam</a></h6>
        <div className="grid-x grid-margin-x">
          {recipeInfo}
        </div>
        <div className="center">
          <button type="button" className="button reroll" onClick={handleClick}>Reroll Recipes</button> 
        </div>
      </div>
    )
  }
}

export default RecipesList