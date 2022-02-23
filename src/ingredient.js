class Ingredient {
  constructor({id, name, quantity, measurement}) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.measurement = measurement;

    Ingredient.all.push(this)
  }

  index() {
    const card = new ingredientCard(this);
    debugger
    document.querySelector("#ingredients-container").innerHTML += card.renderCard();
  }

}

Ingredient.all = []