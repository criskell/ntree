class BufferedWriter {
  buffer = '';

  write = (data) => {
    this.buffer += data;
  }
}

const ls = (path) => fs.readdir("/")
  .catch((err) => err.code === "ENOENT" ? [] : Promise.reject(err));

module.exports = {
  BufferedWriter,
  ls
};