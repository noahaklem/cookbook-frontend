class App {
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
      const cook_time = e.target.querySelector("input[type=number]").value;

      const body = { name, cook_time };
      fetch("http://localhost:3000/api/v1/recipes/${recipe.id}", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      })
      .then(res => res.json())
      .then(updateRecipe => console.log(updateRecipe));
      // working on patch request for recipe to update a recipes information
    });
  };
}