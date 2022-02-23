class ingredientCard {
  constructor({id, name, quantity, measurement}) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.measurement = measurement;

  }

  renderCard() {
    return `
      <div>Ingredient</div>
    `
  }
}