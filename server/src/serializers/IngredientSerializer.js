class IngredientSerializer {
  static getSummary(ingredient) {
    const allowedAttributes = ['id', 'name']

    let serializedIngredient = {}
    for (const attribute of allowedAttributes) {
      serializedIngredient[attribute] = ingredient[attribute]
    }
    return serializedIngredient
  }

  static async getSummaries(ingredients) {
    return await Promise.all(ingredients.map(ingredient => IngredientSerializer.getSummary(ingredient)))
  }
}

export default IngredientSerializer