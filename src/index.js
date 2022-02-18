document.addEventListener("DOMContentLoaded", () => {
  const endPoint = 'http://localhost:3000/api/v1/recipes';
  fetch(endPoint)
  .then(res => res.json())
  .then(recipes => 
    recipes.data.forEach(recipe => {
      const markup = `
        <div>
          <h3>${recipe.attributes.name}</h3>
          <p>Cook Time: ${recipe.attributes.cook_time}</p>
          <button>X</button>
        </div>
      `
      
      document.querySelector("#recipes-container").innerHTML += markup;
    })
  );
});