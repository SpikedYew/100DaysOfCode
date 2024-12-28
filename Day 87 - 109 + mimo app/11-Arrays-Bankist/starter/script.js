'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'standard',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'premium',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'basic',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'premium',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  //deleting previous elements

  containerMovements.innerHTML = '';

  //we used slice to create copy
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__date">date</div>
  <div class="movements__value">${mov}€</div>
</div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur);
  labelBalance.textContent = `${acc.balance} EUR`;
};

// Display summary +

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  // if bank gives interest

  //what if bank does give interest only above 1
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

//Display summary -

//TO FUNCTION

const createUserName = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => {
        return word[0];
      })
      .join('');
  });
};

createUserName(accounts);

console.log(accounts);

// let arrs = username.join('');

// console.log(arrs);

// Event handler
const updateUI = function (acc) {
  displayMovements(acc.movements);

  calcPrintBalance(acc);

  calcDisplaySummary(acc);
};

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  //
  //Checking if input is the same as username shortcut
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    //Display balance
    containerApp.style.opacity = 100;

    updateUI(currentAccount);

    //display ballance
    console.log('Logged In');

    //Clear input fields

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // alert('You are logged In');
  } else {
    // alert('Wrong Password');
  }
});

//Implementing Transfers
//input transfer ammounts
//btn transfer

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // console.log(amount, receiverAcc);

  //Clearing fields

  inputTransferTo.value = inputTransferAmount.value = '';

  // Transfering ammounts from our to theirs.
  // 1. Check if ammount is positive number
  // 2. If user has enough money

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  } else {
    console.log('ups');
  }
});

// Transfer / Loan
// Only load if there is

//closing account if there is at least one deposit with 10% of requested ammount

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    // Add movement
    currentAccount.movements.push(amount);

    //update Ui
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const currentAccDelete = inputCloseUsername.value;
  const currentAccDeletePin = Number(inputClosePin.value);

  //check if user is the same as current user, and if pin is the same as current pin
  if (
    currentAccount.username === currentAccDelete &&
    currentAccount.pin === currentAccDeletePin
  ) {
    inputCloseUsername.value = inputClosePin.value = '';

    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  } else {
    console.log('ups');
  }
});
// Added value to unsort array, because when we click sort, it switched to opposite for eg. true. But we want the opposite value so it needs to be sorted outside and then reasigned in the function
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  // added it when we want to unsort the movements
  sorted = !sorted;
});

//////////////////////
////////////////////// LECTURES
//////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Non-Desctructive Alternatives: toReversed, toSorted, toSpliced with...

console.log(movements);
const reverseMov = movements.toSpliced(2, 4);
console.log(reverseMov);
console.log(movements);
// .toReversed() .toSorted() .toSpliced

movements[0] = 99;
const newMovements = movements.with(1, 11);

console.log(movements);
console.log(newMovements);

/*

const editMovements = (movements[0] = 1);
console.log(movements);
console.log(editMovements);

*/
// More Ways of Creating and Filling Arrays

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// const x = new Array(7);
// x.fill(1);
// x.fill(4, 4, 8);
// console.log(x);
// arr.fill(2, 1, 5);
// console.log(arr);

// //Array.from

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => el.textContent.replace('€', '')
//   );
//   console.log(movementsUI);
// });
// //

// small challenge
// const randomDiceRolls = Array.from(
//   { length: 100 },
//   () => Math.floor(Math.random() * 6) + 1
// );
// console.log(randomDiceRolls);

// randomDiceRolls.sort((a, b) => a - b);
// const z = new Array(7).fill(1);
// const result = z.map((x, index) => index + 1).reverse();

// console.log(x.map(() => 5));

// grouping arrays
/*
console.log(movements);

const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposit' : 'withdrawal'
);

console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementsCount = account.movements.length;

  if (movementsCount >= 8) return 'very active';
  if (movementsCount >= 4) return 'active';
  if (movementsCount >= 1) return 'moderate';
  return 'inactive';
});

console.log(groupedByActivity);

// const accountCategoryGrouped = Object.groupBy(accounts, acc => acc.type);
// console.log(accountCategoryGrouped);

const grouped = Object.groupBy(accounts, ({ type }) => type);

console.log(grouped);
*/
/* 
// Sorting Arrays

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners);
console.log(owners.sort()); //alphabetic

console.log(movements);

//return < 0, A before B (keep oder)
//return > 0, B, before A (switch order)

// Ascending
movements.sort((a, b) => {
  // return b - a;
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);

// Descending
movements.sort((a, b) => {
  // return b - a;
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(movements);

console.log(movements);
*/
//flat and flatMap methods
/*
const array = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(array.flat());
const arrDeep = [[[[1, 2], 3], 4, [5, 6], 7, 8], 1];
console.log(arrDeep.flat(3));

const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((ac, mov) => ac + mov, 0);
console.log(overalBalance);

const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((ac, mov) => ac + mov, 0);
console.log(overalBalance2);
*/
/*



// Some and Every methods

console.log(movements);

//EQUALITY
console.log(movements.includes(-130));

// CONDITION

console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// every();

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Seperate callback

const deposit = mov => mov > 0;
console.log(movements.some(deposit));



*/

// The New findLast and findLastIndex Method

/*

console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 0);
const lastWithdrawalFind = movements.find(mov => mov < 0);
console.log(lastWithdrawal);
console.log(lastWithdrawalFind);

('Your latest large movements was X movements ago');

const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 1000
);
console.log(latestLargeMovementIndex);
console.log(
  `Your latest large movements was ${
    movements.length - latestLargeMovementIndex
  } movements ago`
);
// const latestLarge = movements.
// console.log(latestLarge);

*/

//Magic of chaining methods

/*


const euroToUsd = 1.1;
const totalDeepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, cur) => acc + cur, 0);

console.log(totalDeepositsUSD);

*/

//The find Method

/*

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

*/

//Find on objects
// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// for (const acc of accounts) {
//   if ((acc.owner = 'Jessica Davis')) {
//     console.log(acc);
//     break;
//   }
// }
// //Challenge
// //test data 1
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// //test data 2
// const dogsJulia2 = [9, 16, 6, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];
// function checkDogs(arr1, arr2) {
//   const arrFix = arr1.slice(1, -2);
//   const arr3 = arrFix.concat(arr2);

//   arr3.forEach((val, i) => {
//     if (val > 3) {
//       console.log(`
//       Dog number ${i + 1} is an Adult
//       `);
//     } else {
//       console.log(`
//       Dog number ${i + 1} is Puppy
//       `);
//     }
//   });
// }
// checkDogs(dogsJulia, dogsKate);
// checkDogs(dogsJulia2, dogsKate2);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// //forEach with MAPs and SETs

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value} ${map}`);
// });
/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// const arr2 = [1, 2, 3, 4];

// console.log(arr2.slice(1, -2));

console.log(arr.slice());
console.log(...arr);

// slice is better if we want to chain multiple methods

//SPLICE

console.log('-------SPLICE-------');
arr.splice(-1);

arr.splice(1, 2);
// console.log(arr.splice(2));
console.log(arr);

//REVERSE

console.log('----REVERSE----');
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

console.log('----CONCAT----');
//concat

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

console.log('----JOIN----');

console.log(letters.join(' - '));
*/

//At method

/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1));
console.log(arr.at(-2));

//at also works with strings

const name = 'jonas';
console.log(name.at(-1));
*/

/*
console.log('--------FOR EACH--------');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

movements.forEach(function (e) {
  if (e > 0) {
    console.log(`You deposited ${e}`);
  } else {
    console.log(`You withdraw ${e}`);
  }
});
movements.forEach(function (e) {
  console.log(e + 1);
});

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i} You withdrew ${Math.abs(movement)}`);
  }
}
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`${index} You deposited ${movement}`);
  } else {
    console.log(`${index} You withdraw ${movement}`);
  }
});

const array = [1, 2, 3, 4, 5, 6];
const array2 = [2, 3, 4, 5, 6, 7];

console.log(array.join('-'));
console.log(array.concat(array2));
console.log(array);
console.log(array.reverse());
console.log(array.slice(2, 5));
console.log(array.slice(-1));
console.log(array.splice(3));
console.log(array);
*/
//splice mutates the array, slice creates shallow copy

// // The map method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// const euro = [123, 321];

// const movementsUSD = movements.map(mov => mov * eurToUsd);
// // const movementsUSD = movements.map(function (mov) {
// //   return mov * 1.1;
// // });

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i) => {
//   return `Movement ${i} You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//     mov
//   )}`;
//   // if (mov > 0) {
//   //   return `Movement ${i} You deposited ${mov}`;
//   // } else {
//   //   return `Movement ${i} You withdrew ${Math.abs(mov)}`;
//   // }
// });

// console.log(movementsDescriptions);

//REVERSING ARRAYS

// const reverse = [1, 2, 3];
// const revered = [];

// for (let i = reverse.length - 1; i >= 0; i--) {
//   console.log(i + 1);
//   revered.push(reverse[i]);
// }
// console.log(revered);

// const arrayLoop = [123, 55, -21, -1515, -1235, -6777, -9000, -10000, -1000009];
// const arrayLoopReversed = [];

// for (let i = arrayLoop.length - 1; i >= 0; i--) {
//   arrayLoopReversed.push(arrayLoop[i]);
// }
// console.log(arrayLoopReversed);
/*
const person1 = {
  name: 'Peter Jaskson',
};
const person2 = {
  name: 'Samuel Sigma',
};
const person3 = {
  name: 'Jonas Schmedtmansop',
};
const person4 = {
  name: 'Rocky Monty',
};


// MINE VERSION
const persons = [person1, person2, person3, person4];

const personNewProp = function (pers) {
  pers.forEach(peop => {
    peop.shortcut = peop.name
      .toUpperCase()
      .split(' ')
      .map(word => {
        return word[word.length - 1];
      })
      .join('');
  });
};

personNewProp(persons);
console.log(persons);
*/

// FILTER METHOD
/*
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

//Lazy version
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const names = ['williams', 'peter', 'sigma', 'anna'];

const endWithA = names.filter(name => {
  return name[name.length - 1] === 'a';
});
console.log(endWithA);

const withdrawals = movements.filter(num => num < 0);
console.log(withdrawals);
*/

//REDUCE METHOD

// console.log(movements);

// // acc is like a snowball (accumulator) it gets added or snowballed
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   //what will happen?
//   console.log(`Iteration ${i}: ${acc}: ${cur}`);
//   return acc + cur;
// }, 100);
// console.log(balance);

// //  WITH LOOP
// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

//Maximum Value

// const max = movements.reduce((acc, mov) => {
//   //acc keeps track of max value
//   console.log(acc, mov);
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);
// console.log(max);

//CHALLENGE NR 2
/*
const dogsJulia = [5, 2, 4, 1, 15, 8, 3];
const dogsKate = [16, 6, 10, 5, 6, 1, 4];

const calculateHumanAge = function (arr) {
  const humanAge = arr.map(age => {
    if (age <= 2) {
      return (age = age * 2);
    } else {
      return (age = 16 + age * 4);
    }
  });
  console.log(humanAge);
  const adults = humanAge.filter(age => {
    return age >= 18;
  });
  const average =
    adults.reduce((acc, age) => {
      return acc + age;
    }, 0) / adults.length;

  return average;
  // const sum = adults.reduce((acc, cur) => {
  //   return acc + cur;
  // });
  // const avgAge = sum / humanAge.length - 1;
  // return avgAge;
};

//CHALLENGE 3
const calculateHumanAge2 = function (movements) {
  const humanAge = movements
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return humanAge;
};
console.log(calculateHumanAge2(dogsJulia));
console.log(calculateHumanAge2(dogsKate));
// const calculateHumanAge2 = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
// };
// calculateHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const human1 = calculateHumanAge(dogsJulia);
const human2 = calculateHumanAge(dogsKate);
console.log(human1);
console.log(human2);
*/

///////////////////////
// Challenge NR 4

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
*/

//TEST DATA:

/*

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
dogs.forEach(dog => (dog.recomendedFood = Math.round(dog.weight ** 0.75 * 28)));

// 2

const findSara = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(findSara);
console.log(`
Sarah's dog is ${
  findSara.curFood > findSara.recomendedFood ? 'too fat' : 'too skinny'
}
`);

// 3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recomendedFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recomendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch, ownersEatTooLittle);

// 4

console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too Much!`);

// 5

console.log(dogs.some(dog => dog.curFood === dog.recomendedFood));

// 6

const checkOkayFood = dog =>
  dog.curFood > dog.recomendedFood * 0.9 &&
  dog.curFood < dog.recomendedFood * 1.1;

console.log(dogs.some(checkOkayFood));

// 7

console.log(dogs.filter(checkOkayFood));
console.log(dogs);

// 8
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recomendedFood - b.recomendedFood);
console.log(dogsSorted);
*/

//CHALLENGE FROM VIDEO
/*
const breeds = [
  {
    breed: 'German Shepard',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 32,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];
*/

/*
// 1

const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log(huskyWeight);

// 2

const likesRunningAndFetch = breeds.find(
  breed =>
    breed.activities.includes('fetch') && breed.activities.includes('running')
);
console.log(likesRunningAndFetch);

// 3

const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);

// 4 unique activities

const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

// 5 -> complex one Many dogs like to swim

const x = [
  ...new Set(
    breeds
      .filter(breed => breed.activities.includes('swimming'))
      .flatMap(breed => breed.activities)
      .filter(activity => activity != 'swimming')
  ),
];
console.log(x);

// 6

console.log(breeds.every(breed => breed.averageWeight > 10));

// 7
console.log(breeds.some(breed => breed.activities.length >= 3)); // are there any dogs that have more than 3 or more ac?
console.log(breeds.filter(breed => breed.activities.length >= 3));

// 8

const fetchWeights = breeds
  .filter(breed => breed.activities.includes('fetch'))
  .map(weight => weight.averageWeight);

const heabiestFetchBreed = Math.max(...fetchWeights);
//GOOD LUCK 😀
*/
/*

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

*/
