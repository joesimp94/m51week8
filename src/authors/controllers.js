const Author = require("./model");
const Book = require("../books/model");

const addAuthor = async (req, res) => {
  try {
    const newAuthor = await Author.create(req.body);
    res.status(201).json({ message: "success", newAuthor });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const findAllAuthorsBooks = async (req, res) => {
  try {
    const author = await Author.findOne({
      where: { author: req.params.author },
      include: Book,
    });
    res.status(200).json({ message: "success", author });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

module.exports = {
  addAuthor,
  findAllAuthorsBooks,
};
