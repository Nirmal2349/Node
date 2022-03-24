/// to write and create file


// to create a single file via node.js


// const fs = require("fs");

// const quote2 = "earn better is good for all";



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

// const fs = require("fs");

// fs.readFile("./dude.txt", "utf-8", (err, content) => {
//   if (err) {
//     console.log("file not found ", err);
//   }
//   console.log("quote", content);
// });


/// to update the content in existing file using node.js


//  const fs = require("fs");

// const quote2 = "\n earn better it'  s good for all";



//  fs.appendFile("./dude.txt", quote2, (err) => {
//    console.log("completed writing !!!");
//  });

/// to delete the  existing file using node.js

//  const fs = require("fs");

//  fs.unlink("./sum.js",err=> {
//    console.log("File Deleted !!!")
//  })

/// to delete the  existing file inside other folder using node.js


const fs = require("fs");

fs.readdir("./backup", (err, files) => {
  // console.log(files);
  files.forEach((fileName) =>fs.unlink(`./backup/${fileName}`, (err) => {console.log("Deleted file!!! ✨");}));});