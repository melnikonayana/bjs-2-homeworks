"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant === 0) {
    let root = -b/(2*a)
    arr.push(root);
  } else {
    if (discriminant > 0) {
      let rootFirst = (-b + Math.sqrt(discriminant) )/(2*a);
      let rootSecond = (-b - Math.sqrt(discriminant) )/(2*a);
      arr.push(rootFirst, rootSecond);
    }
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let convertPerc = parseFloat(percent);
  let convertContrib = parseFloat(contribution);
  let convertAmount = parseFloat(amount);
  let convertMonths = parseInt(countMonths);

  if (isNaN(convertPerc) || isNaN(convertContrib) || isNaN(convertAmount) || isNaN(convertMonths)) {
    return false;
  } else {
    let monthPercent = convertPerc / 100 / 12;
    let returnCredit = convertAmount - convertContrib;
    let monthPayment = returnCredit * (monthPercent + (monthPercent / (((1 + monthPercent) ** convertMonths) - 1)));
    let sum = monthPayment * convertMonths;
    sum = sum.toFixed(2);
    sum = parseFloat(sum);
    return sum;
  }``
}

