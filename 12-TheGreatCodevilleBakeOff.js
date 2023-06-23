// Kata 12 - The Great Codeville Bake-off

const chooseRecipe = (bakeryA, bakeryB, recipes) => {

  // Helper function
  const ingredientCheck = (bakery, recipeIngredients) => {
    for (const ingredient of recipeIngredients) {
      if (bakery.includes(ingredient)) {
        return true;
      }
    }
    return false;
  };

  for (const recipe of recipes) {
    if (ingredientCheck(bakeryA, recipe.ingredients) && ingredientCheck(bakeryB, recipe.ingredients)) {
      return recipe.name;
    }
  }
  return 'Despite their best efforts at collaboration, our two bakeries cannot prepare this dish! ☹️';
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// Expected output
// Persian Cheesecake
// Nima's Famous Dijon Raisins