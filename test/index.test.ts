import Bitkub from "../src/index"

/**
 * Dummy test
 */
describe("Dummy test", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy()
  })

  it("Bitkub is instantiable", () => {
    expect(new Bitkub()).toBeInstanceOf(Bitkub)
  })
})
