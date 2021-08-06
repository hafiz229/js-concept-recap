// Fahrenheit to Celsius Convert
function celsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
}

const degreeFahrenheit = 89.6;
const degreeCelsius = celsius(degreeFahrenheit);
console.log("Fahrenheit =", degreeFahrenheit, "Celsius =", degreeCelsius);
