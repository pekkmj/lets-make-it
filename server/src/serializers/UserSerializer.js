import IngredientSerializer from "./IngredientSerializer.js"

class UserSerializer {
  static async getSummary (user) {
    const allowedAttributes = ['id', 'username', 'email']
    
    let serializedUser = {}
    for (const attribute of allowedAttributes) {
      serializedUser[attribute] = user[attribute]
    }

    const getIngredients = await user.$relatedQuery("ingredients")
    serializedUser.ingredients = getIngredients.map((ingredient)=>{
      const serializedIngredient = IngredientSerializer.getSummary(ingredient)
      return serializedIngredient
    })
    return serializedUser
  }
}

export default UserSerializer