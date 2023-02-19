const Model = require("./Model.js")

class Pantry extends Model {
  static get tableName() {
    return "pantries"
  }

  static get relationMappings() {
    const { Ingredient, User } = require("./index.js")

    return {
      ingredient: {
        relation: Model.BelongsToOneRelation,
        modelClass: Ingredient,
        join: {
          from: "pantries.ingredientId",
          to: "ingredients.id"
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "pantries.userId",
          to: "users.id"
        }
      }
    }
  }
}

module.exports = Pantry