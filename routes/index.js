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
const recipes = {
  pizza: {
      name: 'Pizza',
      instructions: [
          'Preheat oven to 475°F (245°C).',
          'Spread dough into a circle and add toppings.',
          'Bake in preheated oven for 10-15 minutes, or until crust is golden brown.'
      ],
      ingredients: [
          'Pizza dough',
          'Tomato sauce',
          'Cheese',
          'Toppings of your choice (e.g., pepperoni, mushrooms, bell peppers)'
      ]
  },
  pasta: {
      name: 'Pasta',
      instructions: [
          'Boil water and cook pasta according to package instructions.',
          'Heat sauce in a separate pan until warm.',
          'Combine cooked pasta with sauce and serve immediately.'
      ],
      ingredients: [
          'Pasta noodles',
          'Pasta sauce',
          'Parmesan cheese (optional)'
      ]
  }
};

// Define GET route for /recipe/:food
router.get('/recipe/:food', (req, res) => {
  const food = req.params.food.toLowerCase();
  if (recipes[food]) {
      res.json(recipes[food]);
  } else {
      res.status(404).send('Recipe not found');
  }
});
