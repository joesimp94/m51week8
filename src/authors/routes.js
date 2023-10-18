const { Router } = require("express");
const authorRouter = Router();

const Author = require("./model");

const { addAuthor, findAllAuthorsBooks } = require("./controllers");

authorRouter.post("/authors", addAuthor);

authorRouter.get("/authors/:author", findAllAuthorsBooks);

module.exports = authorRouter;
