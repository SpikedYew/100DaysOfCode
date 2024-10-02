// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1
// const players1 = game.players[0];
// const players2 = game.players[1];
// console.log(players1);

// //2

// [gk, ...fieldPlayer] = game.players[0];
// console.log(gk, fieldPlayer);

// //3

// const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);

// //4

// const players1Final = [...game.players[1], 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// //5
// const team1 = game.odds.team1;
// const draw = game.odds.draw;
// const team2 = game.odds.team2;

// //6

// function printGoals(players, points) {
//   console.log(...players, points);
// }
// printGoals(game.scored, game.score);

// //7
// console.log(game.odds.team1 < game.odds.team2 ? game.team1 : game.team2);
