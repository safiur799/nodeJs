const readline = require("readline");

const books = require("./books.js");

const readline1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function runagain() {
  readline1.question("", function (name) {
    if (name === "1") {
      books.showBooks();
      callagain();
    } else if (name === "2") {
      readline1.question("Book Name", function (bookname) {
        books.addBooks(bookname);
        callagain();
      });
    } else if (name === "3") {
      readline1.close();
    } else {
      console.log("you press wrong key");
      callagain();
    }
  });
}
runagain();

function callagain() {
  process.stdin.once("data", function () {
    runagain();
  });
}

readline1.on("close", function () {
  console.log("quite");
});
