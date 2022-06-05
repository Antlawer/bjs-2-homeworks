// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
  min = Infinity;
  max = -Infinity;
  sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  if (arr[i] < min) {
    min = arr[i];
  }
  if (arr[i] > max) {
    max = arr[i];
  }
}
avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const workerArr = func(arrOfArr[i]);
    if (max < workerArr) {
      max = workerArr;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let maxNumber = -Infinity;
  let minNumber = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (maxNumber < arr[i]) {
      maxNumber = arr[i];
    }
    if (minNumber > arr[i]) {
      minNumber = arr[i];
    }
  }
  let difference = maxNumber - minNumber;
  return Math.abs(difference);
}
