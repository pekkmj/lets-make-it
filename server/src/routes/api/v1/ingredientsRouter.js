import express from "express";
import Objection from "objection";
const { ValidationError } = Objection;

import cleanUserInput from "../../../services/cleanUserInput.js";
import { Ingredient, User } from "../../../models/index.js";
import IngredientSerializer from "../../../serializers/IngredientSerializer.js";

const ingredientsRouter = new express.Router()

ingredientsRouter.get("/", async (req, res)=>{
  try {
    const ingredients = await Ingredient.query()
    const serializedIngredients = IngredientSerializer.getSummaries(ingredients)
    return res.status(200).json({ ingredients: serializedIngredients })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

ingredientsRouter.post("/", async (req, res) => {
  const cleanedFormData = cleanUserInput(req.body.formData)
  const { userId, name } = cleanedFormData

  try {
    const verifyIngredient = await Ingredient.query().findOne({name: name})
    const findUser = await User.query().findById(userId)
    if (verifyIngredient === undefined){
      const newIngredient = await Ingredient.query().insertAndFetch({name})
      const serializedNewIngredient = IngredientSerializer.getSummary(newIngredient)
      console.log(serializedNewIngredient)
      await findUser.$relatedQuery("ingredients").relate(serializedNewIngredient)
      return res.status(201).json({ ingredient: serializedNewIngredient })
    } else {
      const includedIngredient = await findUser.$relatedQuery("ingredients").findOne({name: name})
      if (includedIngredient === undefined){
        console.log(verifyIngredient)
        await findUser.$relatedQuery("ingredients").relate(verifyIngredient)
        return res.status(201).json({ ingredient: verifyIngredient})
      } else {
        return res.status(422).json({ message: "ingredient already on list!" })
      }
    }
  } catch (err) {
    if (err instanceof ValidationError) {
      return res.status(422).json({ errors: err.data })
    }
    return res.status(500).json({ errors: err })
  }
})

ingredientsRouter.delete("/:name", async (req,res)=>{
  const { name } = req.params
  try {
    const user = await User.query().findById(req.user.id)
    await user.$relatedQuery("ingredients").unrelate().where(`name`, `like`, `${name}`)
    return res.status(204).json({ message: "ingredient has been deleted!"})
  } catch (err) {
    console.log(err)
    return res.status(500).json({errors: err})
  }
})

export default ingredientsRouter