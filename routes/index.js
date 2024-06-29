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
const recipes = [];
// Define GET route for /recipe/:food
router.get('/recipe/:food', (req, res) => {
  const name = req.params.food;
  const food = recipes.find(recipe => recipe.name === name);
  if (food) {
    res.json(food);
  }
  else {
    const defaultResponse = {
      name: name,
      instructions: "Default instructions",
      ingredients: ["Default ingredients"]
    };
    res.json(defaultResponse);
  }
});
