// protoype method in javascript...
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

const book1 = new Book("People skills", "Dale Carnagie", "2020");
const book2 = new Book("Rich Dad Poor Dad", "Robert Kiosaki", "2010");

console.log(book1.getSummary());
console.log(book2.getSummary());
