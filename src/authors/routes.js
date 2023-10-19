const { Router } = require("express");
const authorRouter = Router();

const Author = require("./model");

const { addAuthor, findAllAuthorsBooks } = require("./controllers");

authorRouter.post("/", addAuthor);

authorRouter.get("/:author", findAllAuthorsBooks);

module.exports = authorRouter;
