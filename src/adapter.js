class Adapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1"
  }

  fetchRecipes() {
    return fetch(`${this.baseUrl}/recipes`).then(res => res.json());
  }

  createRecipe(body) {
    return fetch(`${this.baseUrl}/recipes`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json',
      },
      body: JSON.stringify(body)
    }).then(res => res.json());
  }
}