const { Router } = require("express");
const genreRouter = Router();

const Genre = require("./model");

const {
  addGenre,
  findAllGenresBooks,
  findAllGenres,
} = require("./controllers");

genreRouter.post("/", addGenre);

genreRouter.get("/:genre", findAllGenresBooks);

genreRouter.get("/", findAllGenres);

module.exports = genreRouter;
