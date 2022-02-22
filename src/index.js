document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.adapter.fetchRecipes().then(app.createRecipes)
});