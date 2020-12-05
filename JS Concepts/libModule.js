// library module
const LibModule = (function () {
  // private library array to store individual Book objects
  const _library = [];
  // private factory function to create Book objects
  const _Book = ({title, author, pages}) => ({
    title,
    author,
    pages,
    info: function () {
      console.log(`${this.title}, written by ${this.author}, ${this.pages} pages long`);
    },
    updateTitle: function(newTitle) {
      this.title = newTitle;
    },
    updatePages: function(newPages) {
      this.pages = newPages;
    },
    updateAuthor: function(newAuthor) {
      this.author = newAuthor;
    },
  });
// public methods to be returned
  // creates a new Book object and adds it to the library
  const addBook = (title, author, pages) => {
    // presumably some kind of validation would occur here, first
    const book = _Book({title, author, pages});
    _library.push(book);
  }
  // deletes the book at 'index' from the library
  const deleteBook = (index) => {
    _library.splice(index, 1);
  }
  // returns the index of the book if the title is found in the library
  const findInLibrary = (title) => {
    let index = -1;
    _library.forEach((book) => {
      if (book.title === title){
        index = _library.indexOf(book);
      }
    });
    return index;
  }
  // allows access to the book object in the library at index
  const fetchBook = (index) => _library[index];
  // logs the current contents of the library
  const displayLibrary = () => {
    console.log('Books currently in the library:');
    _library.forEach((book) => {
      book.info();
    })
  }
  // return function references to be accessible from the LibModule namespace
  return {addBook, deleteBook, findInLibrary, displayLibrary, fetchBook};
})();

LibModule.addBook("Harry Potter", "Rowling", 300);
LibModule.addBook("Lord of the Rings", "Tolkien", 300);
// Books are added for a long time, later they can be searched
let index = LibModule.findInLibrary("Harry Potter");
// and retrieved
let book = LibModule.fetchBook(index);
book.info();
// Logs 'Harry Potter, written by Rowling, 300 pages long'
book.updateTitle("Harry Potter and the Sorcerer's Stone");
book.updateAuthor("JK Rowling");
// Search for another book
index = LibModule.findInLibrary("Lord of the Rings");
book = LibModule.fetchBook(index);
book.info();
// Logs 'Lord of the Rings, written by Tolkien, 300 pages long'
book.updateAuthor("J.R.R. Tolkien");
book.updatePages(400);
LibModule.displayLibrary();
// Logs:
// Books currently in the library:
// Harry Potter and the Sorcerer's Stone, written by JK Rowling, 300 pages long
// Lord of the Rings, written by J.R.R. Tolkien, 400 pages long
LibModule.deleteBook(0);
LibModule.displayLibrary();
// Logs:
// Books currently in the library:
// Lord of the Rings, written by J.R.R. Tolkien, 400 pages long

// modules create a safe namespace and organization