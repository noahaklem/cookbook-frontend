class Recipe {
  constructor(data, dataAttributes) {
    this.id = parseInt(data.id);
    this.name = dataAttributes.name;
    this.cook_time = dataAttributes.cook_time;

    Recipe.all.push(this);
  }

  renderListItem() {
    return ` 
      <div id="recipe-card">
        <h3 class="title">${this.name}</h3>
        <p class="sub-title">Cook Time: ${this.cook_time}</p>
        <button class="button" data-id=${this.id}>Show Recipe</button>
        <button class="made" data-id=${this.id}>Made Recipe</button>
      </div>
    `
  }

  renderRecipeForm(id, name, cook_time) {
    const form = new Form(id, name, cook_time);
    document.querySelector("#update-recipes-container").innerHTML += form.renderEdit();
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