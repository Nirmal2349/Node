/// to write and create file

// const fs = require("fs");

// const quote2 = "earn better is good for all";

// to create a single file via node.js

// fs.writeFile("./hai.html", quote2, (err) => {
//   console.log("completed writing !!!");
// });

// to create a n-number of file via node.js

// const fs = require("fs");

// const quote2 = "earn better is good for all";

// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//     console.log("Completed writing !!! 👍");
//   });
// }

/// to read file

const fs = require("fs");

fs.readFile("./dude.txt", "utf8", (err, content) => {
  if (err) {
    console.log("file not found ", err);
  }
  console.log("quote", content);
});
