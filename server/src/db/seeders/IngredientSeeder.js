import { User, Ingredient } from "../../models/index.js"

class IngredientSeeder {
  static async seed() {
    const guy = await User.query().findOne({ username: "GuyFieri"})
    const mama = await User.query().findOne({ username: "CookingMama" })

    await Ingredient.query().insert({ name: "salt" })
    await Ingredient.query().insert({ name: "pepper" })
    await Ingredient.query().insert({ name: "paprika" })
    await Ingredient.query().insert({ name: "garlic" })
    await Ingredient.query().insert({ name: "onion" })
    await Ingredient.query().insert({ name: "onion powder" })
    await Ingredient.query().insert({ name: "garlic powder" })
    await Ingredient.query().insert({ name: "cayenne pepper" })
    await Ingredient.query().insert({ name: "parsley" })
    await Ingredient.query().insert({ name: "basil" })
    await Ingredient.query().insert({ name: "oregano" })
    await Ingredient.query().insert({ name: "cumin" })
    await Ingredient.query().insert({ name: "soy sauce" })
    await Ingredient.query().insert({ name: "ginger" })
    await Ingredient.query().insert({ name: "rice wine vinegar" })
    await Ingredient.query().insert({ name: "vinegar" })
    await Ingredient.query().insert({ name: "chicken broth" })
    await Ingredient.query().insert({ name: "spaghetti" })
    await Ingredient.query().insert({ name: "ziti" })
    await Ingredient.query().insert({ name: "breadcrumbs" })
    await Ingredient.query().insert({ name: "olive oil" })
    await Ingredient.query().insert({ name: "canola oil" })
    await Ingredient.query().insert({ name: "red onion" })
    await Ingredient.query().insert({ name: "red bell pepper" })
    await Ingredient.query().insert({ name: "jasmine rice" })
    await Ingredient.query().insert({ name: "curry powder" })
    await Ingredient.query().insert({ name: "lettuce" })
    await Ingredient.query().insert({ name: "cabbage" })
    await Ingredient.query().insert({ name: "carrot" })
    await Ingredient.query().insert({ name: "apple" })
    await Ingredient.query().insert({ name: "orange" })
    await Ingredient.query().insert({ name: "cucumber" })
    await Ingredient.query().insert({ name: "cilantro" })
    await Ingredient.query().insert({ name: "mushroom" })
    await Ingredient.query().insert({ name: "sugar" })
    await Ingredient.query().insert({ name: "milk" })
    await Ingredient.query().insert({ name: "cheese" })
    await Ingredient.query().insert({ name: "lime" })
    await Ingredient.query().insert({ name: "lemon" })
    await Ingredient.query().insert({ name: "butter" })
    await Ingredient.query().insert({ name: "flour" })
    await Ingredient.query().insert({ name: "baking soda" })
    await Ingredient.query().insert({ name: "oats" })
    await Ingredient.query().insert({ name: "asparagus" })


    await guy.$relatedQuery("ingredients").insert({ name: "tortilla" })
    await guy.$relatedQuery("ingredients").insert({ name: "ground beef" })
    await guy.$relatedQuery("ingredients").insert({ name: "avocado" })
    await guy.$relatedQuery("ingredients").insert({ name: "barbecue sauce" })
    await guy.$relatedQuery("ingredients").insert({ name: "hot sauce" })
    await guy.$relatedQuery("ingredients").insert({ name: "buffalo sauce" })
    await guy.$relatedQuery("ingredients").insert({ name: "tortilla chips" })
    await guy.$relatedQuery("ingredients").insert({ name: "ribs" })
    await guy.$relatedQuery("ingredients").insert({ name: "brussel sprouts" })
    await guy.$relatedQuery("ingredients").insert({ name: "chicken wing" })
    await guy.$relatedQuery("ingredients").insert({ name: "old bay" })
    await guy.$relatedQuery("ingredients").insert({ name: "tomato" })
    await guy.$relatedQuery("ingredients").insert({ name: "white wine" })

    await mama.$relatedQuery("ingredients").insert({ name: "chicken" })
    await mama.$relatedQuery("ingredients").insert({ name: "potato" })
    await mama.$relatedQuery("ingredients").insert({ name: "rice" })
    await mama.$relatedQuery("ingredients").insert({ name: "fish sauce" })
    await mama.$relatedQuery("ingredients").insert({ name: "strawberry" })
    await mama.$relatedQuery("ingredients").insert({ name: "whipped cream" })
    await mama.$relatedQuery("ingredients").insert({ name: "red chili flakes" })
    await mama.$relatedQuery("ingredients").insert({ name: "buttermilk" })
  }
}

export default IngredientSeeder