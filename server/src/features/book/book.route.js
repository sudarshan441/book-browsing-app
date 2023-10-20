const express = require("express");
const bookModel = require("./book.model");
const app = express.Router();
const jwt = require("jsonwebtoken");

// Search, filter, and paginate books
// api----- /book?title=Harry%20Potter&page=2&perPage=20
app.get('/', async (req, res) => {
    try {
      const { title, sortBy, sortOrder, page, perPage } = req.query;
  
      const query = {};
      if (title) {
        query.title = { $regex: title, $options: 'i' };
      }
  
      const sortOptions = {};
      if (sortBy) {
        sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
      }
  
      const options = {
        sort: sortOptions,
        page: parseInt(page) || 1,
        limit: parseInt(perPage) || 10, // Default to 10 items per page
      };
  
      const books = await bookModel.paginate(query, options);
      res.json(books);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  

app.delete("/:id", async (req, res) => {
  console.log(req)
  try {
    let exists = await bookModel.findOneAndDelete({
      _id: req.params.id,
    });

    console.log(exists, req.params.id);

    res.status(200).send("book deleted successfully");
  } catch (e) {
    res.send(e.massage);
  }
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(403).send("MISSING ENTITES");
  }
  try {
    let singlData = await bookModel.findOne({ _id: id });
    if (!singlData) {
      return res.status(403).send("data not found");
    }
    return res.status(200).send(singlData);
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

module.exports = app;