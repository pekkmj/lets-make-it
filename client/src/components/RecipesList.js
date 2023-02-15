import React, { useEffect, useState } from "react";

const RecipesList = () =>{
  const baseUrl = '/api/v1/recipes?mealType=Dinner'
  const [recipes, setRecipes] = useState([])
  const [pageLink, setPageLink] = useState(baseUrl)

  const getRecipes = async () =>{
    const onlyRecipes = []
    try {
      const response = await fetch(pageLink)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      if (body.hits){
        for (const data in body.hits){
          const details = body.hits[data]
          for (const key in details){
            if (key === 'recipe'){
              onlyRecipes.push(details[key])
            }
          }
        }
        setRecipes(onlyRecipes)
        setPageLink(body._links.next.href)
      }
      else {
        for (const data in body.recipes.hits){
          const details = body.recipes.hits[data]
          for (const key in details){
            if(key === 'recipe'){
              onlyRecipes.push(details[key])
            }
          }
        }
        setRecipes(onlyRecipes)
        setPageLink(body.recipes._links.next.href)
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const recipeInfo = recipes.map((recipe)=>{
    let ingredientCounter = 0
    const ingredientList = recipe.ingredients.map((ingredient)=>{
      ingredientCounter++
      return <ul key={ingredientCounter}>{ingredient.food}</ul>
    })
    return (
      <div key={recipe.label}>
      <h3>{recipe.label}</h3>
        <ul>
          {ingredientList}
          <a href={recipe.url}>Recipe</a>         
        </ul>
      </div>
    ) 
  })

  useEffect(()=>{
    getRecipes()
  }, [])

  const handleClick = () =>{
    getRecipes()
  }

  return (
    <div>
     {recipeInfo}
     <button type="button" className="button" onClick={handleClick}>Reroll Recipes</button> 
    </div>
  )
}

export default RecipesList