class Adapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1";
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }

  fetchRecipes() {
    return this.get(`${this.baseUrl}/recipes`);
  }

  createRecipe(body) {
    return this.post(`${this.baseUrl}/recipes`, body);
  }

  updateMade(id, body) {
    return this.patch(`${this.baseUrl}/recipes/${id}`, body)
  }

  updateRecipe(id, body) {
    return this.patch(`${this.baseUrl}/recipes/${id}`, body)
  }

  deleteRecipe(id) {
    return this.delete(`${this.baseUrl}/recipes/${id}`)
  }

  get(url) {
    return fetch(url).then(res => res.json());
  }

  patch(url, body) {
    return fetch(url, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(body),
    }).then(res => res.json());
  }

  post(url, body) {
    return fetch(url, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(body),
    }).then(res => res.json());
  }

  delete(url) {
    return fetch(url, {
      method: "DELETE",
      headers: this.headers,
    }).then(res => res.json());
  }
}