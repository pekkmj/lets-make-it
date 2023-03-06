import express from "express"

import EdamamClient from "../../../../apiClient/Edamam.js"
import { Ingredient } from "../../../models/index.js";
import { raw } from "objection";

const edamamRouter = new express.Router()

edamamRouter.get("/", async (req, res)=>{
  const ingredients = req.query.ingredients
  const randomIngredient = await Ingredient.query().orderBy(raw('random()')).first()
  try {
    if (ingredients === undefined) {
      const recipesResponse = await EdamamClient.getRecipes(randomIngredient.name)
      const recipesData = JSON.parse(recipesResponse)
      return res
        .set({ "Content-Type": "application/json" })
        .status(200)
        .json({recipes: recipesData})
    } else {
      const recipesResponse = await EdamamClient.getRecipes(ingredients)
      const recipesData = JSON.parse(recipesResponse) 
      return res
        .set({ "Content-Type": "application/json" })
        .status(200)
        .json({recipes: recipesData})
    }

  } catch (error) {
    return res.status(401).json({ errors: error })
  }
})

export default edamamRouter