console.log("%c My Favorite Meal","color: white; font-size: 37px; font-family: Serif; line-height: 80px;");

function title(name,color,font,family,height){
    console.log(`%c The title of my project is: my favorite meal, ${name}.`,`color:${color}; font-size:${font}px; font-family:${family}; line-height:${height}px;`)
}
title("Linguini Chicken Pasta","white", 25,"times-new-romans", 45);

let chickenCheck = true;
let linguiniCheck = true;
let cheddarCheeseCheck = true;
let goatCheeseCheck = true;
let fetaCheeseCheck = true;
let eggsCheck = 4;
let oliveOilCheck = true;

console.log(typeof(chickenCheck));
console.log(typeof(linguiniCheck));
console.log(typeof(cheddarCheeseCheck));
console.log(typeof(fetaCheeseCheck));
console.log(typeof(goatCheeseCheck));
console.log(typeof(eggsCheck));
console.log(typeof(oliveOilCheck));

// * function Declaration
function linguiniPasta(cheeseOne,cheeseTwo,cheeseThree,eggs,oliveOil){
    console.log(`%c First add ${cheeseOne}, with ${cheeseTwo}, and ${cheeseThree}, together with ${eggs} eggs and 1 tablespoon of ${oliveOil}. Place in a 15 oz bowl. Stir until desired.`,`color:blue; font-size:18px; font-style:`)
}
linguiniPasta("CheddarCheese","GoatCheese","FettaCheese",4,"OliveOil");

// * Array
cookingIngrediance = ["Chicken", "Linguini", "Mushroom"];

console.log(cookingIngrediance);
// * Array with 5 or more entries
let mixInBowl = ["CheddarCheese","GoatCheese","FettaCheese","Eggs","OliveOil","Cauliflower","Carrots","Parsley","Ginger","Green Onions"];

console.table(mixInBowl);

// * Three numbers
let numberEggs = 4;
let highTimeToCook = 65;
let lowTimeToCook = 55;

// * Console.warn
console.warn(`Cooking with ${numberEggs} Eggs in this meal is not safe to go over ${highTimeToCook} minutes in large cook pans, or ${lowTimeToCook} minutes in medium size pans.`);

// * Console.error
console.error(`Never cook your food past the time allowed!`);

// * Fat arrow function
cookingIngrediance.forEach(element => console.log(element));

const ingredieance = ["Chicken","Linguini","Mushrooms"]
const copy = []
// * Second function
ingredieance.forEach(function(item){
    copy.push(item)
})
console.log(copy);
// * Iteraying through the array
for(let i=0;i<mixInBowl.length;i++){
    console.log(`${i}: ${mixInBowl[i]}`);
};


// * Damage to wallet goes here
let costForFood = function(){
    //* total price goes here
    let totalCost = 140;
    return{
        //* calculation stuff goes here
        findFoodPrice: function(){
            return totalCost;
        }
    }
}();

console.log(costForFood.findFoodPrice());

// * Preparation goes here
let prepareMeal = [
    "Get the ingredence as listed above",
"Pre-cook the chicken and saute the mushrooms as well soften up the pasta",
"Place the Milk in a large mixing bowl with the cheeses.",
"Break the eggs into the bowl, add the oil with the Cheese in the bowl.",
"With a spatula, lightly beat the eggs, oil, gradually mixing them with the cheese. When the mixing becomes too thick to work with the spatula, continue with your fingers and then your hands.",
"Place in a oven pan with the chicken broken up into bite size strips.",
"Place in the oven at 425f and cook for 45 minutes.",
"Turn oven down to 350f for 20 minutes if a large pan or 10 minutes for medium size",
"Let stand for 30 minutes before serving. "
]

console.table(prepareMeal);