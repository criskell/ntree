const fs = require("node:fs/promises");

class BufferedWriter {
  buffer = [];

  write = (data) => {
    this.buffer.push(data);
  }
}

const ls = (path) => fs.readdir(path)
  .catch((err) => (err.code === "ENOENT" || err.code === "ENOTDIR") ? [] : Promise.reject(err));

module.exports = {
  BufferedWriter,
  ls
};