const tree = require("../src/lib.js");

describe("tree()", () => {
  describe("estruturas de diretórios", () => {
    const tests = {
      "deve retornar uma estrutura simples": {
        rootDir: "/",
        structure: {
          "/": ["/cli.js", "/lib.js", "README.md"],
        },
        expected: `/
├── cli.js
├── lib.js
└── README.md
`
      },
      "deve retornar uma estrutura com sub-diretórios#1": {
        rootDir: "/",
        structure: {
          "/": ["/a.txt", "/b", "/c.txt"],
          "/b": ["/b/c.txt"]
        },
        expected: `/
├── a.txt
├── b
│   └── c.txt
└── c.txt
`
      },
      "deve retornar uma estrutura com sub-diretórios#2": {
        rootDir: "/",
        structure: {
          "/": ["/a.txt", "/b", "/c.txt", "/f", "/g"],
          "/b": ["/b/c", "/b/c.txt"],
          "/b/c": ["/b/c/a.txt"],
          "/f": ["/f/f.txt"],
          "/g": ["/g/f"],
          "/g/f": ["/g/f/a.txt"]
        },
        expected: `/
├── a.txt
├── b
│   ├── c
│   │   └── a.txt
│   └── c.txt
├── c.txt
├── f
│   └── f.txt
└── g
    └── f
        └── a.txt
`
      },
    };

    Object.keys(tests).forEach((testName) => {
      it(testName, async () => {
        const test = tests[testName];

        const response = await tree(test.rootDir, {
          ls: async (path) => test.structure[path] ?? [],
        });

        expect(response).toBe(test.expected);
      });
    });
  });
});