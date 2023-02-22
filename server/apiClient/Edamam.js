import got from "got"
import dotenv from "dotenv"
dotenv.config();

const edamamApiKey = process.env.EDAMAM_API_KEY
const edamamApiId = process.env.EDAMAM_APP_ID
const baseUrl = " https://api.edamam.com/api/recipes/v2?type=public"

class EdamamClient {
  static async getRecipes(ingredients) {
    try {
      const url = `${baseUrl}&q=${ingredients}&app_id=${edamamApiId}&app_key=%20${edamamApiKey}&random=true`
      const apiResponse = await got(url)
      const responseBody = apiResponse.body
      return responseBody
    } catch (error) {
      return { error: error.message };
    } 
  }
}

export default EdamamClient