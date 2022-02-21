class App {
  constructor() {
    this.adapter = new Adapter();
  }

  attachEventListeners() {
    document.querySelector("#recipes-container"). addEventListener("click", (e) => {
      const id = parseInt(e.target.dataset.id);
      const recipe = Recipe.findById(id);
      document.querySelector("#update-recipes-container").innerHTML += recipe.renderRecipeForm()
    })

    document.querySelector("#update-recipes-container").addEventListener("submit", e => {
      e.preventDefault();
      const id = parseInt(e.target.dataset.id);
      const recipe = Recipe.findById(id);
      const name = e.target.querySelector("input").value;
      const cook_time = parseInt(e.target.querySelector("input[type=number]").value);
      const body = { name, cook_time };
      this.adapter.updatedRecipe(recipe.id, body).then(updatedRecipe => console.log(updatedRecipe));
    // working on patch request for recipe to update a recipes information
   });
  };
}