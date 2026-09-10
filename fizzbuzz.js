function fizzBuzz(numero) {
    if (typeof numero !== "number" || Number.isNaN(numero)) {
        throw new Error("El dato no es un número");
    }

    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz";
    }

    if (numero % 3 === 0) {
        return "Fizz";
    }

    if (numero % 5 === 0) {
        return "Buzz";
    }

    return String(numero);
}

module.exports = fizzBuzz;
