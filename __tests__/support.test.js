const path = require("node:path");
const { ls } = require("../src/support.js");

describe("ls", () => {
  it("deve retornar uma lista dos conteúdos", async () => {
    const contents = await ls(__dirname);

    expect(contents).toContain(path.basename(__filename));
  });
});