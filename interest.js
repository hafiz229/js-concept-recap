// Simple Interest Calculation
function calcualteInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

// parameters
let principalAmount = 1000;
let rateOfInterest = 5;
let timePeriod = 10;
let interestAmount = calcualteInterest(
  principalAmount,
  rateOfInterest,
  timePeriod
);
let totalAmount = principalAmount + interestAmount;

// outputs
console.log("Principle Amount:", principalAmount);
console.log("Rate of Interest:", rateOfInterest);
console.log("Time Period:", timePeriod);
console.log("Interest Amount:", interestAmount);
console.log("Total Amount:", totalAmount);
