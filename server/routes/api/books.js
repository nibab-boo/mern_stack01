const express = require("express");
const router = express.Router();

// Load Book Model
const Book = require("../../models/Books");

// @route    GET api/books/test
// @desc     Tests books route
// @access   Public
router.get("/test", (req, res) => res.send("Book router testing"));

// @route    GET api/books
// @desc     Get all books
// @access   Public
router.get("/", (req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: "No Books found" }))
});
