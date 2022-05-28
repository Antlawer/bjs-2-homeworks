"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4 * a * c;
  if (discriminant === 0) {
    discriminant = -b / (2 * a);
    arr.push(discriminant);
  }
  if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a))
  }
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  let totalAmount;

  let arr = [{name: 'Процентная ставка', value: percent}, {name: 'Начальный взнос', value: contribution}, {name: 'Общая стоимость', value: amount}];
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i].value)){
        return `Параметр "${arr[i].name}" содержит неправильное значение "${arr[i].value}"`
      } 
    }

  if ((typeof(percent) === String) || (typeof(contribution) === String) || (typeof(amount) === String)) {
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);
  }

    let creditSum = amount - contribution;
    let percentTranslate = (percent / 100) / 12;
    let creditTerm = ((date.getFullYear() - new Date().getFullYear()) * 12) + (date.getMonth() - new Date().getMonth());
    let monthPay = creditSum * (percentTranslate + (percentTranslate / (((1 + percentTranslate) ** creditTerm) - 1)));
    totalAmount = creditTerm * monthPay;
  
  return parseFloat(totalAmount.toFixed(2));
  // код для задачи №2 писать здесь

  
}
