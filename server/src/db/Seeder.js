/* eslint-disable no-console */
import { connection } from "../boot.js"
import UserSeeder from "./seeders/UserSeeder.js"
import IngredientSeeder from "./seeders/IngredientSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding users")
    await UserSeeder.seed()

    console.log("seeding ingredients")
    await IngredientSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder