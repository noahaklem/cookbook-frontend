class App {
  constructor() {
    this.adapter = new Adapter();

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClose = this.handleFormClose.bind(this);

    this.createRecipes = this.createRecipes.bind(this);
    this.addRecipes = this.addRecipes.bind(this);
  }

  attachEventListeners() {
    document.querySelector("#recipes-container"). addEventListener("click", this.handleEditClick)
  
    document.querySelector("#update-recipes-container").addEventListener("submit", this.handleFormSubmit);

    document.querySelector("#update-recipes-container").addEventListener("click", this.handleFormClose);

  };

  createRecipes(recipes) {
    recipes.data.forEach(recipe => {
      new Recipe(recipe, recipe.attributes);
    });
    this.addRecipes();
  }

  addRecipes() {
    document.querySelector("#recipes-container").innerHTML = "";
    Recipe.all.forEach(
      recipe => (document.querySelector("#recipes-container").innerHTML += recipe.renderListItem())
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const recipe = Recipe.findById(id);
    const name = e.target.querySelector("input").value;
    const cook_time = parseInt(e.target.querySelector("input[type=number]").value);
    const body = { name, cook_time };
    this.adapter.updateRecipe(recipe.id, body).then(updatedRecipe => {
      const recipe = Recipe.findById(parseInt(updatedRecipe.data.id));
      recipe.update(updatedRecipe.data.attributes);
      this.addRecipes();
    });
  }

  handleEditClick(e) {
    const id = parseInt(e.target.dataset.id);
    const recipe = Recipe.findById(id);
    document.querySelector("#update-recipes-container").innerHTML += recipe.renderRecipeForm()
  }

  handleFormClose(e) {
    
  }

 

}

    
      
      
      