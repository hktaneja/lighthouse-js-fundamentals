const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("While loop----------");
let ingredient = 0;
while ( ingredient < ingredients.length)
{
	console.log(ingredients[ingredient]);
	ingredient++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("For loop------------");
for ( ingredient =0 ;  ingredient<  ingredients.length;  ingredient++)
{
 	console.log(ingredients[ingredient]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("Reverse Order--------");
for ( ingredient = (ingredients.length) -1 ;  ingredient >= 0;  ingredient--)
{
        console.log(ingredients[ingredient]);
}
