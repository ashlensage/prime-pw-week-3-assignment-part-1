console.log('****** Array Practice *******');

// 1. Creating arrays
let drinkArray = ['coffee', 'mimosas', 'pink lemonade', 'smoothies']
console.log('My favorite drinks are: ', drinkArray);

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let foodArray = ['pizza', 'mashed potatoes', 'cheeseburgers', 'brownies'];

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
console.log('My favorite foods are: ', foodArray);


// 2. Array.length - tells you how many items are in the array
console.log('Number or food items:', foodArray.length);

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('Number of foods', foodArray[3])

// 3. Accessing array items
console.log('First food is', foodArray[0]);

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 
console.log('Second animal is', animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log('Last animal is', animalArray[3])

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item

console.log('Last animal is', animalArray.length - 1);


// 4. Adding & Removing Array Items
animalArray.push('goat');
console.log('Added an animal to end,', animalArray);

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
foodArray.push('french fries');
console.log('Added food to the end', foodArray);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
let removedFood = foodArray.pop('french fries');
console.log('Removed the last food', removedFood)
console.log('The new food is now', foodArray)

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
foodArray.unshift('pasta');
console.log(`Added a food to beginning: ${foodArray}`);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
removedFood = foodArray.shift('pasta');
console.log('Removed the first food', removedFood);
console.log('The food is now', foodArray);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
// favFood.spliced();

favFood[1] = "ham"
console.log(favFood);


// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.

favFood.sort.reverse()

const letters = ['p', 'm', 'c', 'b', 'p'];
const lettersSort = letters.sort();
console.log(lettersSort.reverse());

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.

const foods = ['tacos', 'pizza', 'pasta'];
console.log(foods[0] + " and " + foods[1] + " and " + foods[2]);
console.log(foods.join(" and"));

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']

const arr1 = ['pizza', 'pasta', 'tacos'];
const arr2 = ['fish', 'cat', 'bird', 'dog'];

console.log(arr1.concat(arr2));