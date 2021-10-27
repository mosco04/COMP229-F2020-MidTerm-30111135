// Books.js || Edward Omere || 301111135 || Favourite Book List

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {
  // render details page to add a book
      res.render('books/details', {
        title: 'Add Books',
        books: {Title: '', Description: '', Price: '', Author: '', Genre: ''}
      });
});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    const doc = req.body                    // extract from details from the body of the post request
    book.collection.insertOne(doc).then(
      () => res.redirect('/books')
    )
    

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    const id = req.params.id
    book.findById(id, (err, books) => {
      if (err) {
        return console.error(err);
      }
      else {
        res.render('books/details', {
          title: 'Books',
          books: books
        });
      }
    });
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
     const id = req.params.id    //extract the id from the param
     const doc = req.body        //the form details are contained in the body
     book.updateOne({_id: id}, doc) .then(
       () => res.redirect('/books')
     )

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
     const id = req.params.id
     book.deleteOne({_id: id}).then(
       () => res.redirect('/books')
     )
});


module.exports = router;
