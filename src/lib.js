const fs = require("node:fs/promises");
const path = require("node:path");

const { BufferedWriter, ls } = require("./support");

const tree = async (rootDir, options) => {
  const bufferedWriter = new BufferedWriter();

  options.write ||= bufferedWriter.write;

  let current = {
    path: rootDir,
    depthPrefix: "",
    parent: null,
    children: null,
    isLast: true,
    depth: 0,
  };

  while (current) {
    showNode(options.write, current);

    // Encontra os filhos deste diretório
    if (! current.children) {
      const childPaths = await options.ls(current.path);

      current.children = childPaths.map((childPath, index) => ({
        path: childPath,
        isLast: index === childPaths.length - 1,
        parent: current,
        children: null,
        depth: current.depth + 1,
        depthPrefix: current.depth === 0 ? "" : `${current.depthPrefix}${current.isLast ? " " : "│"}   `,
      }));
    }

    // Encontra o próximo diretório ou arquivo
    let parent = current;

    while (parent && ! parent.children.length) {
      parent = parent.parent;
    }

    current = parent?.children.shift();
  }

  return bufferedWriter.buffer;
};

const showNode = (write, node) => {
  const basename = path.basename(node.path) || "/";

  const startSymbol = node.parent
    ? node.isLast ? "└── " : "├── "
    : "";
  const prefix = node.depthPrefix + startSymbol;

  write(prefix + basename + "\n");
};

module.exports = tree;