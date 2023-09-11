import { saludo } from "./xd.js";

describe("testing xd file", ()=>{
  test("test que retorna un 'hola mundo'",()=>{
    expect(saludo()).toBe("Hola mundo")
  })
})