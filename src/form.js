class Form {
  constructor({id, name, cook_time}) {
    this.id = id;
    this.name = name;
    this.cook_time = cook_time;

  }

  renderRecipeForm() {
    return `
      <div id="recipe-update-card">
        <h3>Update Recipe</h3>
        <button type="button"> X </button>
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
}