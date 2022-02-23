class ingredientCard {
  constructor({id, name, recipe_id, quantity, measurement}) {
    this.id = id;
    this.name = name;
    this.recipe_id = recipe_id;
    this.quantity = quantity;
    this.measurement = measurement;

  }

  renderIngredientCard() {
    return `
      <div id="ingredient-card">
        <p>${this.quantity} ${this.measurement} of ${this.name}</p> 
      </div>
    `
  }
}