import safeURI from "../safe-uri";

describe("Safe URI", () => {
  it("should parse a given term returning a safe value to be called by browser", () => {
    const arrange = [
      { term: "carro", expect: "carro" },
      { term: "fusca amarelo", expect: "fusca%20amarelo" },
      { term: "Araçariguama", expect: "Ara%C3%A7ariguama" },
      { term: "12 maçãs", expect: "12%20ma%C3%A7%C3%A3s" },
      { term: "carro & moto", expect: "carro%20%26%20moto" },
    ];

    arrange.forEach((item) => {
      const safeTerm = safeURI(item.term);
      expect(safeTerm).toBe(item.expect);
    });
  });
});
