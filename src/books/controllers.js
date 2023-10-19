const Book = require("./model");

const addBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    console.log(newBook);
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
  try {
    const books = await Book.findAll({});

    if (books.length >= 1) {
      res.status(200).json({ message: "success", books });
      return;
    }
    res.status(404).json({ message: "failure" });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
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
