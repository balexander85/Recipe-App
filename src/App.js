import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const createRecipe = (newRecipe) => {
      setRecipes(currentRecipes => [...currentRecipes, newRecipe]);
  }

  const handleDelete = (indexToDelete) => {
      console.log('Index to delete: ' + indexToDelete);
      setRecipes(recipes.filter((recipe, index) => index !== indexToDelete));
  }

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDelete={handleDelete} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
