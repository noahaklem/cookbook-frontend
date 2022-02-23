class Ingredient {
  constructor({id, name, recipe_id, quantity, measurement}) {
    this.id = id;
    this.name = name;
    this.recipe_id = recipe_id;
    this.quantity = quantity;
    this.measurement = measurement;

    Ingredient.all.push(this);
  }

  renderIndex() {
    const card = new ingredientCard(this);
    const container = this.findContainer(this.recipe_id);
    container.innerHTML += card.renderIngredientCard();
  }

  findContainer(id) {
    const selector = document.querySelectorAll("#ingredients-container");
    return [...selector].find(container => parseInt(container.dataset.id) === id);
  }

}

Ingredient.all = []