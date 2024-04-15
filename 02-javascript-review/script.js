const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
const books = getBooks();
books;

// destructuring
const book = getBook(2);
book;
const title = book.title;

// this is the actual data deconstruction, the properties are extracted from the object,
// hereby the book object
const { author, genres } = book;
title;
author;
genres;

// deconstruction of an array
const [firstGenre, secondaryGenre, ...otherGenre] = genres;

console.log(firstGenre, secondaryGenre, otherGenre);

const newArray = [...otherGenre, "epic new fantasy"];
console.log(newArray);

// updating the object
const updatedBook = {
  ...book,
  // adding a new property to the object
  rottenTomatoes: 9.5,
  // updating the date of publication
  publicationDate: "2024-01-01",
};
console.log(updatedBook);

// javascript template literals, a way to concatenate strings, the variables are enclosed in ${}
const summary = `${title} is a Book by ${author} selling at $${
  20 + 30
} dollars, and it belongs to the genres of ${genres.join()}`;
summary;

// ternary operator
const isBookGood = updatedBook.rottenTomatoes > 8 ? "Good" : "Bad";
isBookGood;

// normal function
function getYear(str) {
  return str.split("-")[0];
}
const getYearFuncResult = getYear(updatedBook.publicationDate);
getYearFuncResult;

// lambda function
const getYearLambda = (str) => str.split("-")[0];
const year_lambda_result = getYearLambda(updatedBook.publicationDate);
console.log(year_lambda_result);

// short circuiting and logical operators
// if the translations object is empty, the hasTranslations will be false
const hasTranslations =
  updatedBook.translations && Object.keys(updatedBook.translations).length > 0;
console.log(hasTranslations);

// falsy values in javascript
// 0, null, undefined, NaN, "", false
const falsyValues = [0, null, undefined, NaN, "", false];
falsyValues.forEach((value) => {
  console.log(Boolean(value));
});

const translations = updatedBook.translations.spanish || "No translation";
console.log(translations);

// nullish coalescing operator, the "??" operator will only
// return the right side value if the left side is null or undefined or falsy values
const wrongReviewCount =
  updatedBook.reviews.librarything.reviewsCount || "No Reviews Found";
console.log(wrongReviewCount);

const rightReviewCount =
  updatedBook.reviews.librarything.reviewsCount ?? "No Reviews Found";
console.log(rightReviewCount);

// optional chaining operator, the "?" operator will only return the value if the property exists
function getReviews(book) {
  const goodReads = book.reviews.goodreads.ratingsCount;

  // here badReads is optional, if it does not exist, it will return undefined, then "??" operator
  // will kick in and return 0
  const badReads = book.reviews.badReads?.ratingsCount ?? 0;
  return goodReads + badReads;
}

console.log(getReviews(book));
*/

const books = getBooks();
const x = [1, 2, 3, 4, 5].map((n) => n * 2);
console.log(x);

const titles = books.map((book) => book.title);
console.log(titles);

function getReviewsCount(book) {
  const goodReads = book.reviews.goodreads.ratingsCount;

  // here badReads is optional, if it does not exist, it will return undefined, then "??" operator
  // will kick in and return 0
  const badReads = book.reviews.badReads?.ratingsCount ?? 0;
  return goodReads + badReads;
}

const essentials = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getReviewsCount(book),
}));

console.log(essentials);

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation)
  .filter((book) => book.genres.includes("fantasy"));
console.log(longBooks);

// reduce method
const pagesAllBooks = books.reduce((accumulator, book) => {
  return accumulator + book.pages; // here you need to return.
}, 0);

const pagesAllBooks_another_way = books.reduce(
  (acc, books) => acc + books.pages,
  0
);
console.log(pagesAllBooks);
console.log(pagesAllBooks_another_way);

// The array sort method
const example_array = [3, 7, 1, 9, 2, 5, 6, 4, 8];
const sorted = example_array.sort((a, b) => a - b); // ascending order, a and b are the current and next value
// if a - b is negateive, it means a is smaller than b, so a will come before b, so array will be sorted in ascending order.

// note that the orginal array is also sorted.
console.log(sorted);
console.log(example_array);

// So a better idea to not mutate the original array is to use the spread operator or the slice method
const sorted_array = [...example_array].sort((a, b) => b - a); // descending order
const sorted_array_another_way = example_array.slice().sort((a, b) => b - a); // descending order
console.log(sorted_array);
console.log(sorted_array_another_way);
console.log(example_array);

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);

// Working with immutable arrays
// 1. add a book object to books array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// 2. remove a book object from books array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3. update a book in the books array
const booksAfterUpdate = booksAfterDelete.map(
  (book) =>
    // here we are updating the book with id 1, if the id is not 1, we are returning the book as it is
    book.id === 1 ? { ...book, pages: 2003 } : book
  // if id is 1, we are returning a new object with the same properties as the book object, but only with the pages updated
);
booksAfterUpdate;
