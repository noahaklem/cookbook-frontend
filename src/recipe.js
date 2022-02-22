class Recipe {
  constructor(data, dataAttributes) {
    this.id = parseInt(data.id);
    this.name = dataAttributes.name;
    this.cook_time = dataAttributes.cook_time;

    Recipe.all.push(this);
  }

  renderListItem() {
    const card = new Card(this)
    document.querySelector("#recipes-container").innerHTML += card.index();
    // card.addEventListeners();
  }

  recipeForm(id, name, cook_time) {
    const form = new Form(id, name, cook_time);
    document.querySelector("#update-recipes-container").innerHTML += form.renderForm();
    form.addEventListeners();
  }

  update({name, cook_time}) {
    this.name = name;
    this.cook_time = cook_time;
  }

  static findById(id) {
    return this.all.find(recipe => recipe.id === id);
  }
}

Recipe.all = [];