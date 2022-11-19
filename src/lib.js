const fs = require("node:fs/promises");

// Ignora erros em que não há uma entrada de diretório ou arquivo num caminho especificado.
const ls = (path) => fs.readdir("/")
  .catch((err) => err.code === "ENOENT" ? [] : Promise.reject(err));

const DEFAULT_OPTIONS = {
  ls,
};

const tree = async (path, options = DEFAULT_OPTIONS) => {
  
};

module.exports = tree;