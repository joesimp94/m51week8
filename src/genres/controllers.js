const Genre = require("./model");
const Book = require("../books/model");
const Author = require("../authors/model");

const addGenre = async (req, res) => {
  try {
    const newGenre = await Genre.create(req.body);
    res.status(201).json({ message: "success", newGenre });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const findAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll({});
    res.status(201).json({ message: "succcess", genres });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const findAllGenresBooks = async (req, res) => {
  try {
    const genre = await Genre.findOne({
      where: { genre: req.params.genre },
      include: Book,
    });
    res.status(200).json({ message: "success", genre });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

module.exports = {
  addGenre,
  findAllGenresBooks,
  findAllGenres,
};
