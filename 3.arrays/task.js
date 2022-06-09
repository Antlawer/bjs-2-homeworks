function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  
  result = arr1.every((i) => arr1.length === arr2.length && arr1[i] === arr2[i]);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  resultArr = arr.filter((i) => i > 0).filter((i) => i % 3 === 0).map((i) => i * 10);

  return resultArr; // array
}
