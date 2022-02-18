class Recipe {
  constructor(data, dataAttributes) {
    this.id = data.id;
    this.name = dataAttributes.name;
    this.cook_time = dataAttributes.cook_time;
    Recipe.all.push(this);
  }

  renderRecipe() {
    return ` 
      <div id="recipe-card">
        <h3 class="title">${this.name}</h3>
        <p class="sub-title">Cook Time: ${this.cook_time}</p>
        <button class="button" data-id=${this.id}>Show Recipe</button>
        <button class="made" data-id=${this.id}>Made Recipe</button>
      </div>
    `
  }
}

Recipe.all = [];