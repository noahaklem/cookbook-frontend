class Card {
  constructor({id, name, cook_time, handleEdit}) {
    this.id = id;
    this.name = name;
    this.cook_time = cook_time;

    this.handleEdit = handleEdit;
  }

  renderCard() {
    return ` 
      <div id="recipe-card">
        <h3 class="title">${this.name}</h3>
        <button id="delete-recipe">X</button>
        <p class="sub-title">Cook Time: ${this.cook_time}</p>
        <button id="edit-recipe" class="button" data-id=${this.id}>Edit Recipe</button>
        <button class="made" data-id=${this.id}>Made Recipe</button>
      </div>
    `
  }
}