const { ls } = require("../src/support.js");

describe("ls", () => {
  it("deve retornar uma lista dos conteúdos", async () => {
    const contents = await ls(__dirname);

    expect(contents).toContain(__filename);
  });
});