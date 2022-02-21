document.addEventListener("DOMContentLoaded", () => {
  const endPoint = 'http://localhost:3000/api/v1/recipes';
  
  const app = new App();
  app.attachEventListeners();

  app.adapter.fetchRecipes().then(recipes => 
    recipes.data.forEach(recipe => {
      document.querySelector("#recipes-container").innerHTML += new Recipe(recipe, recipe.attributes).renderRecipe();

    })
  );
});