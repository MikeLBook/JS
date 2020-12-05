const readingProto = {
    info: function () {
        console.log(this);
    }
}
const bookFactory = (title, author, pages) => {
    const book = Object.assign({}, readingProto, {title, author, pages});
    return book;
}
const newsPaperFactory = (publication, pages) => {
    const newspaper = Object.assign({}, readingProto, {publication, pages})
    return newspaper;
}
const HP = bookFactory("Harry Potter", "JK Rowling", 300);
const NYT = newsPaperFactory("The New York Times", 30);
HP.info();
NYT.info();