const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const {
  addBook,
  findAllBooks,
  findBookByAuthor,
  deleteSingle,
  wipeDatabase,
  editName,
} = require("./controllers");

bookRouter.post("/books", addBook);

bookRouter.get("/books", findAllBooks);

bookRouter.get("/books/:author", findBookByAuthor);

bookRouter.delete("/books", deleteSingle);

bookRouter.delete("/books/wipeDB", wipeDatabase);

bookRouter.put("/books", editName);

module.exports = bookRouter;
