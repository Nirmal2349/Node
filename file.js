const fs = require("fs");

const quote2 = "earn better is good for all";

// fs.writeFile("./backup/hai.html", quote, (err) => {
//   console.log("completed writing !!!");
// });

for (let i = 1; i <= 10; i++) {
  fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
    console.log("Completed writing !!! 👍");
  });
}
