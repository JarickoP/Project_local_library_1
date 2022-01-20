const { pop } = require("../../test/fixtures/books.fixture")

function getTotalBooksCount(books) {return books.length}

function getTotalAccountsCount(accounts) {return accounts.length}

function getBooksBorrowedCount(books) {
  let total = 0
  for (let book in books) {
    for (let borrow in books[book].borrows) {
      if (books[book].borrows[borrow].returned == false) {total += 1}
    }
  }
  return total
}

function getMostCommonGenres(books) {
  let sorted = books.map((sort) => {return {name:sort.genre, count: 0}})
  for (let book in sorted) {
    for (let one in books) {
      if (sorted[book].name == books[one].genre) {
        sorted[book].count += 1
      }
    }
  }
  let topFive = sorted.slice(0,5)
  return topFive.sort((a,b) => a.count > b.count? -1: 1)
}

function getMostPopularBooks(books) {
  let popular = books.sort((booka , bookb) => booka.borrows.length > bookb.borrows.length? -1 : 1)
  return popular.map((popu) => {
    return {
      name:popu.title,
      count:popu.borrows.length
    } 
  }).slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  let popBooks = books.sort((booka ,bookb) => booka.borrows.length > bookb.borrows.length? -1: 1)
  let finalList = {}
  for (let book in popBooks) {
    for (let author in authors) {
       if (popBooks[book].authorId == authors[author].id) {
         finalList[book] = {
           name:authors[author].name.first + " " + authors[author].name.last,
           count:popBooks[book].borrows.length
         }
       }
    }
  }
  const sliced = Object.values(finalList).slice(0,5)
  return sliced
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
