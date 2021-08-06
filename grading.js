// Grading Calculation System
function grade(mark) {
  if (mark >= 80) {
    return "A+";
  } else if (mark >= 75) {
    return "A";
  } else if (mark >= 70) {
    return "A-";
  } else if (mark >= 65) {
    return "B+";
  } else if (mark >= 60) {
    return "B";
  } else if (mark >= 55) {
    return "B-";
  } else if (mark >= 50) {
    return "C+";
  } else if (mark >= 45) {
    return "C";
  } else if (mark >= 40) {
    return "D";
  } else {
    return "F";
  }
}
// Marks Obtain
let abir = 80;
let samir = 79;
let afif = 64;
let david = 35;

// Display Marks & Grading
console.log("Abir's Mark:", abir, "Grade:", grade(abir));
console.log("Samir's Mark:", samir, "Grade:", grade(samir));
console.log("Afif's Mark:", afif, "Grade:", grade(afif));
console.log("David's Mark:", david, "Grade:", grade(david));
