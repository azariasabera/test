var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // For demonstration purposes, fetch the "pizza" recipe
  // You can modify this to fetch any recipe dynamically
  res.render('index', { recipe: recipes });
});

module.exports = router;


// Sample data for recipes
const recipes = [
  {name: "Pasta",
  instructions: ["Mix everything together","Put it in oven for 30 min","Mix everything together"],
  ingredients: ["500g flour","2 chili","1tsp lemon juice"]},

  {name: "Pizza",
  instructions: ["Mix everything together","Put it in oven for 30 min","Mix everything together"],
  ingredients: ["500g flour","2 chili","1tsp lemon juice"]}
];
// Define GET route for /recipe/:food
router.get('/recipe/:food', (req, res) => {
  const name = req.params.food;
  const food = recipes.find(recipe => recipe.name === name);
  if (food) {
    res.json(food);
    // res.send('Recipe found');
  }
  else {
    const defaultResponse = {
      name: name,
      instructions: "Default instructions",
      ingredients: ["Default ingredients"]
    };
    res.json(defaultResponse);
    // res.send('Recipe not found');
  }
});
