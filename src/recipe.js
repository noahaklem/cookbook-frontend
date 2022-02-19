class Recipe {
  constructor(data, dataAttributes) {
    this.id = parseInt(data.id);
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

  renderRecipeForm() {
    return `
      <div id="recipe-update-card">
        <h3>Update Recipe</h3>
        <form data-id=${this.id}>
        <div>
          <input type="text" value="${this.name}" />
        </div>
        <div>
          <input type="number" value="${this.cook_time}" />
        </div>
          
        <button type="submit">Update Recipe</button>
        </form>
      </div>
    `;
  }

  static findById(id) {
    return this.all.find(recipe => recipe.id === id);
  }
}

Recipe.all = [];