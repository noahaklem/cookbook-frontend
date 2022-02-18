document.addEventListener("DOMContentLoaded", () => {
  const endPoint = 'http://localhost:3000/api/v1/notes';
  fetch(endPoint)
  .then(res => res.json())
  .then(recipeJson => 
    recipeJson.forEach(recipe => {
      const markup = `
        <div>
          <h3>${recipe.name}</h3>
          <p>${recipe.cook_time}</p>
          <button>X</button>
        </div>
      `
      
      document.querySelector("#recipe-container").innerHTML += markup;
    })
  );
});