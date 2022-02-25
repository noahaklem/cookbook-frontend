class recipeCard {
  constructor({id, name, cook_time, made}) {
    this.id = id;
    this.name = name;
    this.cook_time = cook_time;
    !made ? this.made = "Not Tried" : this.made = "Tried";
  }

  renderRecipeCard() {
    return ` 
      <div data-id=${this.id} id="recipe-card">
        <h3 class="title">${this.name} <button class="delete" data-action="delete" id="delete-recipe" data-id=${this.id}">X</button></h3>
        
        <p class="title">Cook Time: ${this.cook_time}</p>
        <button data-action="edit" class="button" data-id=${this.id}>Edit Recipe</button>
        <button data-action="made" class="made" data-id=${this.id}>${this.made}</button>
        
        <div data-id=${this.id} id="ingredients-container">
        <h4 class="title">Ingredients:</h4>
        </div>
      </div>
    `;
  }
}