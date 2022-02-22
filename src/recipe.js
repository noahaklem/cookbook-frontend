class Recipe {
  constructor(data, dataAttributes) {
    this.id = parseInt(data.id);
    this.name = dataAttributes.name;
    this.cook_time = dataAttributes.cook_time;

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


  static findById(id) {
    return this.all.find(recipe => recipe.id === id);
  }
}

Recipe.all = [];