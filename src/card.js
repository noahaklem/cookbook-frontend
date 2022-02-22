class Card {
  constructor({id, name, cook_time}) {
    this.id = id;
    this.name = name;
    this.cook_time = cook_time;

  }

  index() {
    return ` 
      <div id="recipe-card">
        <h3 class="title">${this.name}</h3>
        <button type="button"> X </button>
        <p class="sub-title">Cook Time: ${this.cook_time}</p>
        <button class="button" data-id=${this.id}>Show Recipe</button>
        <button class="made" data-id=${this.id}>Made Recipe</button>
      </div>
    `
  }
}