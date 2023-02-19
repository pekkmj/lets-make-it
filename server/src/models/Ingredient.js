const Model = require("./Model.js")

class Ingredient extends Model {
  static get tableName() {
    return "ingredients"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" }
      }
    }
  }

  static get relationMappings() {
    const { User, Pantry } = require("./index.js")

    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "ingredients.id",
          through: {
            from: "pantries.ingredientId",
            to: "pantries.userId"
          },
          to: "users.id"
        }
      },
      pantries: {
        relation: Model.HasManyRelation,
        modelClass: Pantry,
        join: {
          from: "ingredients.id",
          to: "pantries.ingredientId"
        }
      }
    }
  }
}

module.exports = Ingredient