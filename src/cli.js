const path = require("node:path");

const tree = require("./lib.js");

const main = async () => {
  const dir = path.resolve(process.argv[2] ?? process.cwd());
  console.log(await tree(dir, { write: process.stdout.write.bind(process.stdout) }));
};

module.exports = main;