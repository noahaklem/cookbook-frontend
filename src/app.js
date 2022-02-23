class App {
  constructor() {
    this.adapter = new Adapter();

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.createRecipes = this.createRecipes.bind(this);
    this.addRecipes = this.addRecipes.bind(this);
  }

  attachEventListeners() {
    document.querySelector("#recipes-container").addEventListener("click", this.handleClick);

    document.querySelector("#recipes-container").addEventListener("submit", this.handleSubmit);
  }

  createRecipes(recipes) {
    recipes.data.forEach(recipe => {
      new Recipe(recipe, recipe.attributes, recipe.attributes.ingredients);
    });
    this.addRecipes();
  }

  addRecipes() {
    document.querySelector("#recipes-container").innerHTML = "";
    Recipe.all.forEach(recipe => {
      recipe.index();
      recipe.addIngredients();
    });
  }

  delete(id) {
    Recipe.findById(id)

  }

  edit(id) {
    const recipe = Recipe.findById(id);
    recipe.recipeForm(recipe)
  }

  made(id) {
    console.log("made")
  }

  handleClick(e) {
    let action = e.target.dataset.action;
    let id = parseInt(e.target.dataset.id)
    if (action) {
      this[action](id);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const recipe = Recipe.findById(id);
    const name = e.target.querySelector("#recipe-update-card [type=text]").value
    const cook_time = parseInt(e.target.querySelector("#recipe-update-card [type=number]").value)
    const body = { name, cook_time }
    this.adapter.updateRecipe(recipe.id, body)
    .then(updatedRecipe => {
      const recipe = Recipe.findById(parseInt(updatedRecipe.data.id));
      recipe.update(updatedRecipe.data.attributes);
      this.addRecipes();
    }) 
  }
}

    
      
      
      