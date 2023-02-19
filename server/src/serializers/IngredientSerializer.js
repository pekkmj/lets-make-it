class IngredientSerializer {
  static getSummary(ingredient) {
    const allowedAttributes = ['id', 'name']

    let serializedIngredient = {}
    for (const attribute of allowedAttributes) {
      serializedIngredient[attribute] = ingredient[attribute]
    }
    return serializedIngredient
  }
}

export default IngredientSerializer