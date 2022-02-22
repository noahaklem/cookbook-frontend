class App {
  constructor() {
    this.adapter = new Adapter();

    this.handleEdit = this.handleEdit;

    this.createRecipes = this.createRecipes.bind(this);
    this.addRecipes = this.addRecipes.bind(this);
  }

  attachEventListeners() {
    document.querySelector("#edit-recipe").addEventListener("click", this.handleEdit)
    console.log("edit")

    document.querySelector("#delete-recipe").addEventListener("click", this.handleDelete);
    console.log("delete")
  }

  createRecipes(recipes) {
    recipes.data.forEach(recipe => {
      new Recipe(recipe, recipe.attributes);
    });
    this.addRecipes();
  }

  addRecipes() {
    Recipe.all.forEach(recipe => {
      recipe.index()
      this.attachEventListeners();
    });
    
  }

  handleEdit(e) {
    const id = parseInt(e.target.dataset.id)
    const recipe = Recipe.findById(id);
    const form = new Form(recipe);
    document.querySelector("#update-recipes-container").innerHTML += form.renderForm();
  }

  handleDelete(e) {
    const id = parseInt(e.target.dataset.id)
    const recipe = Recipe.findById(id);
    console.log("delete action")
  }
}

    
      
      
      