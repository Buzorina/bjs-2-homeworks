"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  let d = b**2-4*a*c;
  let x1, x2;

  if (d === 0) {
    x1 = -b/(2*a);
    arr.push(x1);
    
  } else if (d > 0) {
    x1 = (-b + Math.sqrt(d) )/(2*a);
    x2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x1, x2);
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if(isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    
    return false;
  }

  let n = countMonths;
  let p = percent / 100 / 12;
  let s = amount - contribution;
  let monthPay = s * (p + (p / (((1 + p)**n) - 1)));
  let payment = parseFloat((monthPay * n).toFixed(2));

  return payment;
}
