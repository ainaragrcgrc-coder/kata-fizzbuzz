const fizzBuzz = require("./fizzbuzz");

test("Número divisible por 3 devuelve Fizz", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
});

test("Número divisible por 5 devuelve Buzz", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
});

test("Número divisible por 3 y 5 devuelve FizzBuzz", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});

test("Número no divisible por 3 ni por 5 devuelve el número", () => {
    expect(fizzBuzz(7)).toBe("7");
});

test("Dato que no es un número lanza un error", () => {
    expect(() => fizzBuzz("hola")).toThrow("El dato no es un número");
});