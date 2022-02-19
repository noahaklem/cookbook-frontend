class App {
  attachEventListeners() {
    document.querySelector("#recipes-container"). addEventListener("click", (e) => {
      const id = parseInt(e.target.dataset.id);
      const recipe = Recipe.findById(id);
      document.querySelector("#update-recipes-container").innerHTML += recipe.renderRecipeForm()
    })
  };
}