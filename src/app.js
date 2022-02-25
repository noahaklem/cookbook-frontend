class App {
  constructor() {
    this.adapter = new Adapter();

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCreate = this.handleCreate.bind(this);

    this.createRecipes = this.createRecipes.bind(this);
    this.addRecipes = this.addRecipes.bind(this);
  }

  attachEventListeners() {
    document.querySelector("#recipes-container").addEventListener("click", this.handleClick);

    document.querySelector("#recipes-container").addEventListener("submit", this.handleSubmit);

    document.querySelector("#new-recipe").addEventListener("submit", this.handleCreate);
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
      recipe.renderIndex();
      recipe.addIngredients();
    });
  }

  delete(id) {
    const recipe = Recipe.findById(id);
    this.adapter.deleteRecipe(recipe.id).then(recipes => {
      Recipe.all.splice(0, Recipe.all.length);
      this.createRecipes(recipes);
    })
  }

  edit(id) {
    const recipe = Recipe.findById(id);
    recipe.recipeForm(recipe);
  }

  made(id) {
    const recipe = Recipe.findById(id);
    const made = !recipe.made;
    const body = { made }
    this.adapter.updateMade(recipe.id, body)
    .then(updatedMade => {
      const recipe = Recipe.findById(parseInt(updatedMade.data.id));
      recipe.update(updatedMade.data.attributes);
      this.addRecipes();
    })
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

  handleCreate(e) {
    e.preventDefault();
    const name = e.target.querySelector("#new-recipe [type=text]").value;
    const cook_time = e.target.querySelector("#new-recipe [type=number]").value;
    const made = false;
    const body = { name, cook_time, made }
    this.adapter.createRecipe(body)
    .then(newRecipe => {
      if (newRecipe.status === 'error') {
        newRecipe.message.forEach(error => {
          const div = document.querySelector("#error");
          const message = document.createElement("li");
          message.innerText = error
          div.appendChild(message)
        })
      } else {
        Recipe.all.splice(0, Recipe.all.length);
        this.createRecipes(newRecipe)
      }
    })
  }
}

    
      
      
      