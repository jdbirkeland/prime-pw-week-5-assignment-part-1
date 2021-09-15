console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Jacob',  // Added object 'firstName'
  lastName: 'Birkeland',  // Added (seperate) object 'lastName'
  hasSiblings: true,  // Added 'hasSiblings' boolean property
  shoeCount: 12,  // Added property 'shoeCount'
  favThreeFoods:{ // Added new array 'favThreeFoods' as nested object
      fav1: "pizza",
      fav2: "wings",
      fav3: "tacos",
  // Could have also created this the original way I learned: favThreeFoods: ['pizza', 'wings', 'tacos'],
}
};
  // TODO - add properties here

console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/

let fullName = (me.firstName + " " + me.lastName);
console.log(fullName);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
console.log(me.favThreeFoods.fav1); // log using nested array
// console.log(me.favThreeFoods[0]); - if orginal learned array
console.log(me.favThreeFoods.fav3); // log using nested array
// console.log(me.favThreeFoods[2]); - if original learned array


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/
console.log(me.shoeCount); // Console.log your current shoe count
me.shoeCount = me.shoeCount +1; //Set your object's shoeCount to be what it was plus 1
console.log(me.shoeCount); // Console.log updated shoe count



/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'blue';
console.log(me.favoriteColor);
