<h1 align="center">Let's Make It!</h1> 

Cooking can be hard for a lot and it's mostly because we don't know what to make or how to make it. This application will assist you in this endavor by helping you search for recipes by ingredients. What makes this app stand out from the other search engines is that it will highlight the most relevant recipes based off of the ingredients you have at home!

Use the credentials to explore the complete functionality of the app or make an account for your own use!

Email: homecook@food.com

Password: cook

(Not a real email!)

Link to application: https://lets-make-it.herokuapp.com/

# Features:

  - Search for recipes by a couple ingredients or receive random ones!

  - Users can create their own "pantry" of ingredients on their profile page

  - Search results are parsed through and are presented in color-coated tiles that are based off how many shared ingredients the recipe has with the user's pantry ingredients. Recipes are from the Edamam database.

  - Color code for recipes

    * Green: Has the most shared ingredients

    * Yellow: has some shared ingredients

    * Brown: Few to none shared ingredients and/or if the user is not signed in

  - On each recipe tile, here is a button to the origin site of the recipe and to the list of ingredients

  - Color code for ingredients

    * Green: The ingredient is an exact match in the user's pantry

    * Yellow: The ingredient contains a word that is in the user's pantry but is not an exact match. A user may have salt but not sea salt, kosher salt, finishing salt, etc.

    * Black: The ingredient shares no commonality with any of the user's pantry ingredients

## Search results example

<img src="https://i.imgur.com/oh7a1E1.png" width="400"/>

# Installing on your Local Machine

- Clone the repository

- When in the file, run:

  - `cd server`
  
  - `createdb_lets-make-it_development`

  - `yarn migrate:latest`

  - `yarn db:seed`

  - `cd ..`

  - `yarn install`

- **Note: the log in credentials will not work when you clone it. But you can make your own!** 

# Creator

Michael Pekkarinen

# Technologies used

Front End: React, Sass/CSS, HTML

Back End: NodeJS, Express, Objection, Knex
