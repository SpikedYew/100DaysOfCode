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

*/

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
