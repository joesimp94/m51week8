const Book = require("./model");

const addBook = async (req, res) => {
  try {
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    });

    res.status(201).json({ message: "Success!", newBook });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(412).json({ message: error.message, error });
      return;
    }
    res.status(500).json({ message: error.message, error });
  }
};

const findAllBooks = async (req, res) => {
  console.log(req.originalUrl);
  const books = await Book.findAll({});

  const successResponse = {
    message: "Success!",
    books,
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
      bookAuthor,
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
    deleteBook,
  };

  res.send(successResponse);
};

const wipeDatabase = async (req, res) => {
  const deleteAll = await Book.destroy({
    truncate: true,
  });

  const successResponse = {
    message: "Database has successfully been wiped.",
    deleteAll,
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
    updatedBook,
  };

  res.send(successResponse);
};

module.exports = {
  addBook,
  findAllBooks,
  findBookByAuthor,
  deleteSingle,
  wipeDatabase,
  editName,
};
