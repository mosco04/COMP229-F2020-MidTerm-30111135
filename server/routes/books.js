// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  const books =  book.collection
  const u = [
    {"Title":"The Fellowship of the Ring","Description":"Sauron, the Dark Lord, has gathered to him all the Rings of Power – the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring – the ring that rules them all – which has fallen into the hands of the hobbit, Bilbo Baggins.","Price":10.3,"Author":"J. R. R. Tolkien","Genre":"Fantasy"},
    {"Title":"The Two Towers","Description":"Frodo and the Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. ","Price":9.64,"Author":"J. R. R. Tolkien","Genre":"Fantasy"},
    {"Title":"The Return of the King","Description":"The armies of the Dark Lord Sauron are massing as his evil shadow spreads even wider. Men, Dwarves, Elves and Ents unite forces to do battle against the Dark.","Price":9.76,"Author":"J. R. R. Tolkien","Genre":"Fantasy"},
    {"Title":"Ringworld","Description":"Louis Wu, accompanied by a young woman with genes for luck, and a captured kzin – a warlike species resembling 8-foot-tall cats -- are taken on a space ship run by a brilliant 2-headed alien called Nessus. Their destination is the Ringworld, an artificially constructed ring with high walls that hold 3 million times the area of Earth. Its origins are shrouded in mystery. Louis Wu, accompanied by a young woman with genes for luck, and a captured kzin – a warlike species resembling 8-foot-tall cats -- are taken on a space ship run by a brilliant 2-headed alien called Nessus. Their destination is the Ringworld, an artificially constructed ring with high walls that hold 3 million times the area of Earth. Its origins are shrouded in mystery.Louis Wu, accompanied by a young woman with genes for luck, and a captured kzin – a warlike species resembling 8-foot-tall cats -- are taken on a space ship run by a brilliant 2-headed alien called Nessus. Their destination is the Ringworld, an artificially constructed ring with high walls that hold 3 million times the area of Earth. Its origins are shrouded in mystery.","Price":10.4,"Author":"Larry Niven","Genre":"Sci-Fi"},
    {"Title":"Blood Music","Description":"An amazing breakthrough in genetic engineering made by Vergil Ulam is considered too dangerous for further research, but rather than destroy his work, he injects himself with his creation and walks out of his lab, unaware of just how his actions will change the world. ","Price":18.11,"Author":"Greg Bear","Genre":"Sci-Fi"},
    {"Title":"Neuromancer","Description":"Case had been the sharpest data-thief in the business, until vengeful former employees crippled his nervous system. But now a new and very mysterious employer recruits him for a last-chance run. ","Price":12.38,"Author":"William Gibson","Genre":"Sci-Fi"},
    {"Title":"The Blade itself: The First law: Book One","Description":"Inquisitor Glokta, a crippled and increasingly bitter relic of the last war, former fencing champion turned torturer extraordinaire, is trapped in a twisted and broken body - not that he allows it to distract him from his daily routine of torturing smugglers.","Price":17.62,"Author":"Joe Abercrombie","Genre":"Fantasy"},
    {"Title":"Storm Front (The Dresden Files, Book 1)","Description":"For Harry Dresden—Chicago's only professional wizard—business, to put it mildly, stinks. So when the police bring him in to consult on a grisly double murder committed with black magic, Harry's seeing dollar signs. But where there's black magic, there's a black mage behind it. And now that mage knows Harry's name...","Price":10.99,"Author":"Jim Butcher","Genre":"Urban Fantasy"},
    {"Title":"The Lies of Locke Lamora","Description":"They say that the Thorn of Camorr can beat anyone in a fight. They say he steals from the rich and gives to the poor. They say he's part man, part myth, and mostly street-corner rumor. And they are wrong on every count.","Price":15.83,"Author":"Scott Lynch","Genre":"Fantasy"},
    {"Title":"Dune","Description":"Dune is the story of the boy Paul Atreides, who would become the mysterious man known as Muad'Dib. He would avenge the traitorous plot against his noble family—and would bring to fruition humankind’s most ancient and unattainable dream.","Price":10.15,"Author":"Frank Herbert","Genre":"Sci-Fi"},
    {"Title":"Mistborn: The Final Empire","Description":"For a thousand years the ash fell and no flowers bloomed. For a thousand years the Skaa slaved in misery and lived in fear. For a thousand years the Lord Ruler, the 'Sliver of Infinity,' reigned with absolute power and ultimate terror, divinely invincible. ","Price":9.77,"Author":"Brandon Sanderson","Genre":"Fantasy"}
    ]

    u.map(item => books.insertOne(item))
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

    /*****************
     * ADD CODE HERE *
     *****************/

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});


module.exports = router;
