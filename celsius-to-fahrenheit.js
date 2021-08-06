// Celsius to Fahrenheit Convert
function fahrenheit(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

const degreeCelsius = 32;
const degreeFahrenheit = fahrenheit(degreeCelsius);
console.log("Celsius =", degreeCelsius, "Fahrenheit =", degreeFahrenheit);
