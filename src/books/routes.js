const { Router } = require("express");
const bookRouter = Router();

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

bookRouter.get("/:author", findBookByAuthor);

bookRouter.delete("/", deleteSingle);

bookRouter.delete("/wipeDB", wipeDatabase);

bookRouter.put("/", editName);

module.exports = bookRouter;
