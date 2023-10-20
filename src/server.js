require("dotenv").config();
const express = require("express");

const Book = require("./books/model");
const bookRouter = require("./books/routes");

const Author = require("./authors/model");
const authorRouter = require("./authors/routes");

const Genre = require("./genres/model");
const genreRouter = require("./genres/routes");

// const Publisher = require("./publishers/model");
// const publisherRouter = require("./publishers/routes");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use("/books", bookRouter);

app.use("/authors", authorRouter);

app.use("/genres", genreRouter);

// app.use("/", publisherRouter);

const syncTables = async () => {
  Author.hasMany(Book);
  Genre.hasMany(Book);
  // Publisher.hasMany(Book);

  // Author.hasMany(Publisher);
  // Publisher.hasMany(Author);

  Book.belongsTo(Author);
  Book.belongsTo(Genre);
  // Book.belongsTo(Publisher);

  await Author.sync();
  await Genre.sync();
  // await Publisher.sync();
  await Book.sync();
};

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is healthy!" });
});

app.listen(port, async () => {
  try {
    await syncTables();
    console.log("Database tables synced successfully.");
  } catch (error) {
    console.error("Error syncing tables:", error);
  }

  console.log("Server is listening...");
});
