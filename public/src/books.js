const { getAllBorrowedBooks } = require("./accounts");

function findAuthorById(authors, id) {
  for (let author in authors){
    if (authors[author].id === id) {return authors[author]}
  }
}

function findBookById(books, id) {
  for (let book in books) {
    if (books[book].id === id) {return books[book]}
  }
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = getAllBorrowedBooks(books)
  let unborrowed = []
  for (let book in books) {
    if (!borrowed.includes(books[book])) {unborrowed.push(books[book])}
  }
  return [borrowed, unborrowed]
}

function getBorrowersForBook(book, accounts) {
  let userId = []
  for (let withdrawl in book.borrows) {
    userId.push({
      ...book.borrows[withdrawl],
      ...accounts.find((account) => account.id == book.borrows[withdrawl].id)
    })
  }
  return userId.slice(0, 10)
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
