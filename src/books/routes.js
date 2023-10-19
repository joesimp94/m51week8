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

bookRouter.post("/", addBook);

bookRouter.get("/", findAllBooks);

bookRouter.get("/books/:author", findBookByAuthor);

bookRouter.delete("/", deleteSingle);

bookRouter.delete("/books/wipeDB", wipeDatabase);

bookRouter.put("/", editName);

module.exports = bookRouter;
