const fs = require("fs");

const showBooks = function () {
  var dataBuffer = fs.readFileSync("book.json");
  var dataJson = dataBuffer.toString();
  var data = JSON.parse(dataJson);
  data.forEach((element) => {
    console.log(element.bookname);
  });
};

const addBooks = function (bookname) {
  const book = loadbook();
  book.push({
    bookname: bookname,
  });
  const dataJson = JSON.stringify(book);
  fs.writeFileSync("book.json", dataJson);
};

const loadbook = function () {
  try {
    var dataBuffer = fs.readFileSync("book.json");
    var dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
module.exports = {
  showBooks: showBooks,
  addBooks: addBooks,
};
