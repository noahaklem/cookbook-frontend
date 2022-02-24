class Recipe {
  constructor(data, dataAttributes, ingredients) {
    this.id = parseInt(data.id);
    this.name = dataAttributes.name;
    this.cook_time = dataAttributes.cook_time;
    this.made = dataAttributes.made;

    this.recipeIngredients = [];
    this.createIngredients = this.createIngredients(ingredients);

    Recipe.all.push(this);
  }

  renderIndex() {
    const card = new recipeCard(this)
    document.querySelector("#recipes-container").innerHTML += card.renderRecipeCard();
  }

  update({name, cook_time, made}) {
    this.name = name;
    this.cook_time = cook_time;
    this.made = made;
  }

  recipeForm(recipe) {
    const form = new Form(recipe);
    const card = this.findCard(this.id)
    card.innerHTML += form.renderRecipeForm();
  }

  createIngredients(ingredients) {
    ingredients.forEach(ingredient => {
      const recipeIngredient = new Ingredient(ingredient)
      this.recipeIngredients.push(recipeIngredient);
    })
  }

  addIngredients() {
    this.recipeIngredients.forEach(ingredient => {
      ingredient.renderIndex();
    })
  }

  findCard(id) {
    const selector = document.querySelectorAll("#recipe-card");
    return [...selector].find(card => parseInt(card.dataset.id) === id);
  }


  static findById(id) {
    return this.all.find(recipe => recipe.id === id);
  }
}

Recipe.all = [];