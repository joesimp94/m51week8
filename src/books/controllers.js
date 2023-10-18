const { Request } = require("express");
const Book = require("./model");
const { Sequelize } = require("sequelize");
const connection = require("../db/connection");

const addBook = async (req, res) => {
  const newBook = await Book.create({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
  });

  const successResponse = {
    message: "Success!",
    newBook: newBook,
  };

  res.send(successResponse);
};

const findAllBooks = async (req, res) => {
  console.log(req.originalUrl);
  const books = await Book.findAll({});

  const successResponse = {
    message: "Success!",
    books: books,
  };

  res.send(successResponse);
};

const findBookByAuthor = async (req, res) => {
  console.log(req.params);
  const bookAuthor = await Book.findAll({
    where: { author: req.params.author },
  });
  if (bookAuthor) {
    const successResponse = {
      message: "Success!",
      bookAuthor: bookAuthor,
    };
    res.send(successResponse);
  } else {
    const errorResponse = {
      message: "Author not found",
    };
    res.send(errorResponse);
  }
};

const deleteSingle = async (req, res) => {
  const deleteBook = await Book.destroy({
    where: { title: req.body.title },
  });

  const successResponse = {
    message: "Success!",
    deleteBook: deleteBook,
  };

  res.send(successResponse);
};

const wipeDatabase = async (req, res) => {
  const deleteAll = await Book.destroy({
    truncate: true,
  });

  const successResponse = {
    message: "Database has successfully been wiped.",
    deleteAll: deleteAll,
  };

  res.send(successResponse);
};

const editName = async (req, res) => {
  const updatedBook = await Book.update(
    { title: req.body.newTitle },
    { where: { title: req.body.title } }
  );

  const successResponse = {
    message: "Success!",
    updatedBook: updatedBook,
  };

  res.send(successResponse);
};

module.exports = {
  addBook: addBook,
  findAllBooks: findAllBooks,
  findBookByAuthor: findBookByAuthor,
  deleteSingle: deleteSingle,
  wipeDatabase: wipeDatabase,
  editName: editName,
};
