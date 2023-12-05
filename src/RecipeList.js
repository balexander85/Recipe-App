import React from "react";

function Recipe({recipe, handleDelete}) {
  return (
      <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td><img src={recipe.photo} alt={`image of ${recipe.name}`}/></td>
        <td>{recipe.ingredients}</td>
        <td>{recipe.preparation}</td>
        <td>
          <button type="submit" name="delete" onClick={handleDelete}>Delete</button>
        </td>
      </tr>
  )
}

function RecipeList({recipes, handleDelete}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, index) => {
            return <Recipe recipe={recipe} handleDelete={() => handleDelete(index)} key={index}/>
        })}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
