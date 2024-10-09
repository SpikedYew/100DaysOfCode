'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[2]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //function to order food
  order: function (startedIndex, mainIndex) {
    return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
  },

  //Cool for orders and very cool
  //Destructuring is super nice

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address = 'In person pick up',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1} ${ing2} ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  openingHours,
};

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);
console.log(new Set('Jonas'));

//How to work with SETS

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.delete('Pizza');
console.log(orderSet);

for (const order of orderSet) console.log(orderSet);

//Use of sets

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = new Set(staff);
console.log(staffUnique);

// Looping over objects

// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days`;

// for (const day of properties) {
//   openStr += ` ${day}, `;
// }
// console.log(openStr);

// //Object values

// const values = Object.values(openingHours);
// console.log(values);

// const entires = Object.entries(openingHours);
// console.log(entires);

// for (const [key, { open, close }] of entires) {
//   console.log(`On ${key} we open at ${open}, and close at ${close}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // With optional Chaining

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   //what if we dont want undefined?
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does nor exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// const users = [
//   {
//     name: 'Jonas',
//     email: 'hello@ap.pl',
//   },
// ];
// console.log(users[0]?.name ?? 'User array empty');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0, //zero is falsy value
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Biobanni Rossi',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10; //assigns 10 with ||=
// rest2.numGuests ||= 10;
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// console.log(rest1);
// console.log(rest2);

// //when there is owner we want to make him anonymous

// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// console.log(rest2);
// console.log(rest1); // THERE ISNT ANY IT LOGS UNDEFINED

// rest1.owner &&= '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>' //now it will log nothing

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; //numGuest doesnt exist

// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('--- AND ---');
// // console.log(0 && 'Jonas');
// // console.log(7 && 'Jonas');

// if (restaurant.orderPizza) { //we pretend if mushroom exist
//   restaurant.orderPizza('mushroom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

/*
// 1. Destructuring

//SPREAD , becaise on RIGHT side of = (operator)
const arr = [1,2, ...[3,4]]

//REST, because it is on LEFT side of = (operator)
const [a, b, ...others] = [1,2,3,4,5]
console.log(a,b, others);

const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood); //Rest elements in otherFood

//Objects



const {sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays, sat);

// 2. Functions



const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

add(2,3)
add(5, 3, 7, 2) // anny amount should work for funtion
add(8,2,5,3,1,4)

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('musshroms', 'onion', 'pickles')
restaurant.orderPizza('mushrooms')

// restaurant.orderDelivery({
//   time:'22:30',
//   address:'Viva la vida loca 22/ 1212',
//   mainIndex:2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({

//   mainIndex:2,
//   starterIndex: 2,
// });


/*
//The Spread Operator

const arr = [7,8,9] //What if we want new array with new elements based on this array? We have to create loop
const badNewArr = [1,2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1,2, ...arr]; // ... is spread operator
const newArrWspread = [1,2, arr];// we get a array in array
console.log(newArrWspread);
console.log(newArr);

console.log(...newArr); // it logs individual arguments of the array

// Adding value at the end 

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Spread on string

const str = 'Jonas';
const letter = [...str, '', 's'];
console.log(letter);

// End of spread operator

// Real- world example

//const ingredients = [prompt('Let`s make pasta! Ingriedient 1?'), prompt('ingredient 2'), prompt('ingredient 3')];
// console.log(ingredients);


//orderPasta function
//restaurant.orderPasta(...ingredients);

// Objects 

const newRestaurant = {foundingYear: 1991, ...restaurant, founder: 'Giuseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


// DECONSTRUCTING OBJECT
/*
const {name, openingHours, categories} = restaurant;

console.log(name,openingHours,categories);

//setting name for destructured 
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);


//setting default value if empty
const {menu =[] , starterMenu: starters = []} = restaurant;

console.log(starters, menu);

// Mutating values

let a = 111;
let b = 999;
console.log(a, b);
const obj = {
  a: 23,
  b: 7,
  c: 14,
};

//have to be in ()
({a, b} = obj)

console.log(a, b);

// Nested objects 


//openingHours is from variable that we stored earlier up

const {
  fri: {open: o, close: c}
} = openingHours;
console.log(o,c);


//


// DECONSTRUCTING ARRAYS 


// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2]




// // let [first, second] = restaurant.categories; // this works
// // console.log(first);

// // console.log(first, second);

// // const [ , seconds, third, fifth] = restaurant.starterMenu;
// // console.log(seconds, fifth);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);


// //Reversing the value so they would be around

// // from -> to
// // <-
// // const temp = main;
// // console.log(main, secondary);
// // main = secondary;
// // console.log(main, secondary);
// // secondary = temp;
// // console.log(main, secondary);

// //Reversing using destructering

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //function to order food

// console.log(restaurant.order(2,1));

// //Receive 2 return valuses from a function
// const [starter, mainOrder] = restaurant.order(2,0);
// console.log(starter + ', ' + mainOrder);

// const nested = [2,4,[5,6]];

// // const [i, ,j] = nested;
// // console.log(i, j);

// const [i , ,[j, k]] = nested;
// console.log(i,j,k);

// // Default values

// const [p, q, r] = [9, 8];

// // ^ if we keep it like this the value of "r" will be undefined, so we can do sometinh like this:

// const [f = 1, g = 1, h = 1] = [13,124];

// console.log(f,g,h);

*/
