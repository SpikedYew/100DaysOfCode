'use strict';
/*

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES6 METHOD
  //   numPassengers = numPassengers || 1;

  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
  console.log(booking);
};

createBooking('A21');
createBooking('A22', 4, 1);

createBooking('B22', undefined, 199);
//If we want to skip we set it as undefined cause it is the default value



const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 123412341234123,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport == 123412341234123) {
    alert('Check In');
  } else {
    alert('Wrong passport');
  }
};
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//Jonas object changed (when we logged it) but flight didnt change even when we assigned it

//flightNum = flight

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
//wrong passport
// console.log(jonas);

*/

//Functions accepting callback functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //takes in a function so its higer order
// const transformer = function (str, fn) {
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed by: ${fn.name}`);
//   console.log('---------------');
// };

// transformer('Javascript is the best!', upperFirstWord);

// transformer('Javascript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('🤚');
// };
// document.body.addEventListener('click', high5);

// ['jonas', 'martha', 'jacob'].forEach(high5); //for each of them callback is called

// Functions Returning Functions

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey!');

greeterHey('Jonas');
greeterHey('Bartek');

greet('Hello')('Jonas');
*/
const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greet('Siema')('Bartek');
