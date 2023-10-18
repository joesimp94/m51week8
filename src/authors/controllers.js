const Author = require("./model");
const Book = require("../books/model");

const addAuthor = async (req, res) => {
  const newAuthor = await Author.create({
    author: req.body.author,
    publisher: req.body.publisher,
  });

  const successResponse = {
    message: "Success!",
    newAuthor: newAuthor,
  };

  res.send(successResponse);
};

const findAllAuthorsBooks = async (req, res) => {
  const authorBooks = await Author.findAll({
    where: { author: req.params.author },
  });
  const findAuthorBooks = await Book.findAll({
    where: { author: req.params.author },
  });
  const successResponse = {
    message: "Success!",
    authorBooks: findAuthorBooks,
  };
  res.send(successResponse);
};

module.exports = {
  addAuthor: addAuthor,
  findAllAuthorsBooks: findAllAuthorsBooks,
};
