/*
Page that uses the API
Create an index page for this application in which the recipe is shown. You may use view engines such as pug, but the recipe has to be fetched from the recipe route. In this case, it does not matter what meal you are fetching, it can be "pizza" for instance. Also, it does not matter how you show the recipe in the page, but it has to be somehow rendered. Only restriction is that the strings should be shown as is, but you may still slice the arrays, for instance, to unordered list.
*/

function renderIndex() {
    fetch("/recipe/Pizza")
    .then(response => response.json())
    .then(data => {
        let recipe = data;
        document.getElementById("recipe").innerHTML = `
        <h1>${recipe.name}</h1>
        <h2>Instructions</h2>
        <ul>
            ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join("")}
        </ul>
        <h2>Ingredients</h2>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
        </ul>
        `;
    });
}

renderIndex();