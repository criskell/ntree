const fs = require("node:fs/promises");
const nodePath = require("node:path");

class BufferedWriter {
  buffer = [];

  write = (data) => {
    this.buffer.push(data);
  }
}

const ls = (path) => fs.readdir(path)
  .then((names) => names.map((name) => nodePath.join(path, name)))
  .catch((err) => (err.code === "ENOENT" || err.code === "ENOTDIR") ? [] : Promise.reject(err));

module.exports = {
  BufferedWriter,
  ls
};