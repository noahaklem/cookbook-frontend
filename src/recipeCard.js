class recipeCard {
  constructor({id, name, cook_time}) {
    this.id = id;
    this.name = name;
    this.cook_time = cook_time;
  }

  renderRecipeCard() {
    return ` 
      <div data-id=${this.id} id="recipe-card">
        <h3 class="title">${this.name}</h3>
        <button data-action="delete" id="delete-recipe" data-id=${this.id}">X</button>
        <p class="sub-title">Cook Time: ${this.cook_time}</p>
        <button data-action="edit" class="button" data-id=${this.id}>Edit Recipe</button>
        <button data-action="made" class="made" data-id=${this.id}>Made Recipe</button>
        <h4>Ingredients:</h4>
        <div data-id=${this.id} id="ingredients-container">
        
        </div>
      </div>
    `;
  }
}