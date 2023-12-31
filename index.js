const { getNumberOfLines, getFileSizeInBytes } = require("./utils");
const { ARGUMENT_TYPE } = require("./constants");

const args = process.argv.slice(2);

async function main() {
  const argumentType = args[0];
  const fileName = args[1];

  switch (argumentType) {
    case ARGUMENT_TYPE.BYTE_SIZE:
      await getFileSizeInBytes(fileName);
      break;
    case ARGUMENT_TYPE.NUMBER_OF_LINES:
      await getNumberOfLines(fileName);
  }
}

main();
