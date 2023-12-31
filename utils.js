const fs = require("fs/promises");

/**
 * function to count the size of the file in bytes
 */

async function getFileSizeInBytes(path) {
  const fileStats = await fs.stat(path);
  console.log(fileStats.size);
}

/**
 * function to get number of lines in a file
 */
async function getNumberOfLines(path) {
  const data = await fs.readFile(path);
  console.log(data.toString().split("\n").length);
}

/**
 * function to count number of characters in a file
 */
async function getNumberOfCharactersInFile(path) {
  const data = await fs.readFile(path);
  console.log(data.length);
}

module.exports = {
  getFileSizeInBytes,
  getNumberOfLines,
  getNumberOfCharactersInFile,
};
