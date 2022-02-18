document.addEventListener("DOMContentLoaded", () => {
  const endPoint = 'http://localhost:3000/api/v1/recipes';
  fetch(endPoint)
  .then(res => res.json())
  .then(recipes => 
    recipes.data.forEach(recipe => {
      const newRecipe = new Recipe(recipe, recipe.attributes);
      document.querySelector("#recipes-container").innerHTML += newRecipe.renderRecipe();
    })
  );
});