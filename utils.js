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

module.exports = { getFileSizeInBytes, getNumberOfLines };
