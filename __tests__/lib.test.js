const tree = require("../src/lib.js");

describe("tree()", () => {
  test("deve retornar uma árvore simples", async () => {
    const formatted = await tree(".", {
      ls: (path) => ({
        ".": ["/cli.js", "/lib.js", "README.md"],
      })[path],
    });

    expect(formatted).toBe(`.
├── cli.js
├── lib.js
└── README.md`);
  });
});