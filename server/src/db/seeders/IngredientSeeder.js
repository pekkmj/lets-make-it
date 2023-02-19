import { User } from "../../models/index.js"

class IngredientSeeder {
  static async seed() {
    const bob = await User.query().findOne({ username: "bob"})
    const bobette = await User.query().findOne({ username: "bobette" })

    await bob.$relatedQuery("ingredients").insert({ name: "egg" })
    await bob.$relatedQuery("ingredients").insert({ name: "butter" })
    await bob.$relatedQuery("ingredients").insert({ name: "bacon" })
    await bob.$relatedQuery("ingredients").insert({ name: "avocado" })
    await bob.$relatedQuery("ingredients").insert({ name: "spaghetti" })

    await bobette.$relatedQuery("ingredients").insert({ name: "chicken" })
    await bobette.$relatedQuery("ingredients").insert({ name: "salt" })
    await bobette.$relatedQuery("ingredients").insert({ name: "pepper" })
    await bobette.$relatedQuery("ingredients").insert({ name: "cumin" })
    await bobette.$relatedQuery("ingredients").insert({ name: "potato" })
    await bobette.$relatedQuery("ingredients").insert({ name: "rice" })
  }
}

export default IngredientSeeder