class Recipe {
  constructor(data, dataAttributes, ingredients) {
    this.id = parseInt(data.id);
    this.name = dataAttributes.name;
    this.cook_time = dataAttributes.cook_time;
   
    this.recipeIngredients = [];
    
    this.createIngredients = this.createIngredients(ingredients);

    Recipe.all.push(this);
  }

  index() {
    const card = new Card(this)
    document.querySelector("#recipes-container").innerHTML += card.renderCard();
  }

  update({name, cook_time}) {
    this.name = name;
    this.cook_time = cook_time;
  }

  recipeForm(recipe) {
    const form = new Form(recipe);
    document.querySelector("#recipe-card"). innerHTML += form.renderForm();
  }

  createIngredients(ingredients) {
    ingredients.forEach(ingredient => {
      const recipeIngredient = new Ingredient(ingredient)
      this.recipeIngredients.push(recipeIngredient);
    })
  }

  addIngredients() {

    //this works but is not rendering for each seperate card need to fix
    this.recipeIngredients.forEach(ingredient => {
      ingredient.index();
    })
  }


  static findById(id) {
    return this.all.find(recipe => recipe.id === id);
  }
}

Recipe.all = [];