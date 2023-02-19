import express from "express";
import Objection from "objection";
const { ValidationError } = Objection;

import cleanUserInput from "../../../services/cleanUserInput.js";
import { Ingredient, User } from "../../../models/index.js";

const ingredientsRouter = new express.Router()

ingredientsRouter.get("/", async (req, res)=>{
  try {
    const ingredients = await Ingredient.query()
    return res.status(200).json( ingredients )
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

ingredientsRouter.post ("/", async (req, res) => {
  const cleanedFormData = cleanUserInput(req.body.formData)
  const { userId, name } = cleanedFormData

  try {
    const verifyIngredient = await Ingredient.query().findOne({name: name})
    const findUser = await User.query().findById(userId)
    if (verifyIngredient === undefined){
      const newIngredient = await Ingredient.query().insertAndFetch({name})
      await findUser.$relatedQuery("ingredients").insert(newIngredient)
      return res.status(201).json({ ingredient: newIngredient })
    } else {
      const includedIngredient = await findUser.$relatedQuery("ingredients").findOne({name: name})
      if (includedIngredient === undefined){
        await findUser.$relatedQuery("ingredients").relate(verifyIngredient)
        return res.status(201).json({ ingredient: verifyIngredient})
      } else {
        return res.status(422).json({ message: "ingredient already on list!" })
      }
    }
  } catch (err) {
    console.log(err)
    if (err instanceof ValidationError) {
      return res.status(422).json({ errors: err.data })
    }
    return res.status(500).json({ errors: err })
  }
})

export default ingredientsRouter