document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.attachEventListeners();
  app.adapter.fetchRecipes().then(app.createRecipes)
});