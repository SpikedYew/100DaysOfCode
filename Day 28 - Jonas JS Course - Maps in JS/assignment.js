const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

//Deconstrutiring Arrays

/*
  //1.1
  const [firstBook, secondBook] = books;
  console.log(firstBook, secondBook);

  //1.2

  const [ , , thirdBook] = books;
  console.log(thirdBook);

  //1.3


  const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

  const [[ ,rating], [ , ratingsCount]] = ratings;
  console.log(rating, ratingsCount);

  //1.4

  const ratingStars = [63405, 1808];
  const [fiveStarRating = 0, oneStarRating = 0, threeStarRatings = 0] = ratingStars;
  console.log(fiveStarRating, oneStarRating, threeStarRatings);

  


  // Destructugin Objects

  //2.1 (i forgot the first one is an array)


  const {title, author, ISBN} = books[0];

  console.log(title);

  //2.2

  const {keywords: tags} = books[0];
  console.log(tags);
  

  //2.3

  const {language, programmingLanguage = "unknown"} = books[6];

  //2.4

  let bookTitle = 'unknown';
  let bookAuthor = 'unknown';

  ({title: bookTitle,author: bookAuthor} = books[0]);

  //2.5

  const {thirdParty: {goodreads: {rating : bookRating}}} = books[0];
  console.log(bookRating);
  //2.6

  function printBookInfo ({title = '', author = '', year = 'year unknown'}) {
      console.log(`${title} by ${author}, ${year}`);
  };
  
  printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });



  //3.1

  const bookAuthorThree = [...books[0].author, ...books[1].author]
  console.log(bookAuthorThree);

  //3.2

  function spellWord(word) {
    console.log(...word)
  }
  spellWord('Javascript')



// 4.1

const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

//4.2

// const [bookPublisher, ...restOfTheBook] = [books[1].publisher, books[1]];
// console.log(bookPublisher, restOfTheBook);

const {publisher: bookPublisher, ...restOfTheBook} = books[1];
console.log(bookPublisher, restOfTheBook);

//4.3 

function printBookAuthorsCount(title, ...authors) {
  console.log(`The book ${title} has ${authors.length} authors`);
}

printBookAuthorsCount(books[1].title, ...books[1].author)
printBookAuthorsCount('Artur', 'Sebastian', 'Robert')

*/

// 5.1
// function hasExamplesInJava(input) {
//   return input.programmingLanguage === 'Java' || 'no data availabe';
// }
// console.log(hasExamplesInJava(books[1]));

// 5.2
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`${books[i].title} provides online content`);
// }

// 6.1

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent ??
//     console.log(`${books[i].title} provides no data about its online content.`);
// }

// 6.1
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent ??
//     console.log(
//       `"${books[i].title}" provides no data about its online content`
//     );}

// 7.1

// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
//   console.log(books[i].edition);
// }

// //7.2

// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
//   console.log(books[i].thirdParty.goodreads.rating);
// }

// //8.1
// let pageSum = 0;
// for (const book of books) {
//   pageSum += book.pages;
// }
// console.log(pageSum);

//9.2

// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M.Ritchie'],
//   pages,
// };
// // console.log(newBook2);

// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
// };

// const book = {
//   keyword: ['auston', 'filip'],
// };
// // console.log(bookData);
// // console.log(newBook);

// function getFirstKeyword(book) {
//   return book.keyword?.[0];
// }
// // console.log(getFirstKeyword(newBook2));
// // console.log(getFirstKeyword(book));

// //11.1

// const entries = [];

// for (const key of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push([key]); //We push deconstructed array into key of the object
// }
// for (const [index, values] of Object.values(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entries[index].push(values);
// }

// for (const values of Object.values(book[0].thirdparty.goodreads).entries([
//   index,
//   value,
// ])) {
//   entries.push;
// }

// here after const we desctructure the same as i did back down with one, second

// for (const [index, value] of Object.values(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entries3[index].push(value);
// }

//11.2 doesnt work

// for (const [index, key] of Object.values(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entries3[index] = entries.push(key);
// }
// console.log(entries3);

//11.3

// const entries3 = [];
// const entries3and = Object.entries(books[0].thirdParty.goodreads);

// //11.4
// console.log(entries3and);
// console.log(entries);

//12.1

const keyWords = [];

for (const book of books) {
  keyWords.push(...book.keywords);
}
// console.log(keyWords);
uniqueKeywords = new Set(keyWords);
console.log(uniqueKeywords);

uniqueKeywords.add('coding');
uniqueKeywords.add('science');
console.log(uniqueKeywords);
uniqueKeywords.delete('business');
const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);
uniqueKeywords.clear();
console.log(uniqueKeywords);