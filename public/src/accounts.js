function findAccountById(accounts, id) {
  for (let ids in accounts){
    if (accounts[ids].id === id) {return accounts[ids]}
  }
}

function sortAccountsByLastName(accounts) {
   return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0
  for (let book in books) {
    if (books[book].borrows.some((borrow) => borrow.id == account.id)) {total += 1} 
  }
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  let borrowedBooks = books.filter((book) => book.borrows[0].returned == false && book.borrows[0].id == account.id)
   return borrowedBooks.map((book) => {
    return {
      ...book ,
      author:authors.find((author) => author.id == book.authorId)
    } 
  }) 
}

function getAllBorrowedBooks(books) {
  return books.filter((book) => book.borrows[0].returned == false)
}

module.exports = {
  getAllBorrowedBooks,
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
