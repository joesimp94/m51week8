// const Publisher = require("./model");
// const Book = require("../books/model");
// const Author = require("../authors/model");

// const addPublisher = async (req, res) => {
//   try {
//     const newPublisher = await Publisher.create(req.body);
//     res.status(201).json({ message: "success", newPublisher });
//   } catch (error) {
//     res.status(500).json({ message: error.message, error });
//   }
// };

// const findAllPublishers = async (req, res) => {
//   try {
//     const publishers = await Publisher.findAll({});
//     res.status(201).json({ message: "succcess", publishers });
//   } catch (error) {
//     res.status(500).json({ message: error.message, error });
//   }
// };

// const findAllPublishersBooks = async (req, res) => {
//   try {
//     const publisher = await Publisher.findOne({
//       where: { publisher: req.params.publisher },
//       include: Book,
//     });
//     res.status(200).json({ message: "success", publisher });
//   } catch (error) {
//     res.status(500).json({ message: error.message, error });
//   }
// };

// const findAllPublishersAuthors = async (req, res) => {
//   try {
//     const author = await Publisher.findOne({
//       where: { publisher: req.params.publisher },
//       include: Author,
//     });
//     res.status(200).json({ message: "success", author });
//   } catch (error) {
//     res.status(500).json({ message: error.message, error });
//   }
// };

// module.exports = {
//   addPublisher,
//   findAllPublishersBooks,
//   findAllPublishers,
//   findAllPublishersAuthors,
// };
