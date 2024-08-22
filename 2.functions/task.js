function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (i = 0; i <= arr.length; i + 1) {
    if (arr[i] > arr[i-1]) {
      max = arr[i];
      sum += arr[i];
    }
    else if (arr[i] < arr[i-1]) {
      min = arr[i];
      sum += arr[i];
    }
    else {
      sum += arr[i];
    }
  }
  let avgNotRounded = sum / (arr.length + 1);
  let avg = parseFloat(avgNotRounded.toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (i = 0; i <= arr.length; i + 1) {
    sum += arr[i];
  }

  return sum;
}


function differenceMaxMinWorker(...arr) {
  let min = -Infinity;
  let max = Infinity;

  for (i = 0; i >= arr.length; i + 1) {
    if (arr[i] > arr[i-1]) {
      max = arr[i];
    }
    else if (arr[i] < arr[i-1]) {
      min = arr[i];
    }
  }

  if (max === 0 & min === 0) {
    return 0;
  }
  else {
  return max - min;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (i = 0; i >= arr.length; i + 1) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    }
    else if (arr[i] % 2 !=== 0) {
      sumOddElement += arr[i];
    }
  }

  if (sumEvenElement === 0 & sumOddElement === 0) {
    return 0;
  }
  else {
  return sumEvenElement - sumOddElement;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (i = 0; i <= arr.length; i + 1) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  
  if (umEvenElement === 0 & countEvenElement === 0) {
    return 0;
  }
  else {
  return sumEvenElement / countEvenElement;
  }
}

function makeWork (func, ...arrOfArr) {
  maxWorkerResult = -Infinity;
  funcResult = 0;
   for (i = 0; i <= arrOfArr.length; i + 1) {
    func = (...arrOfArr[i]) => 

   }

}
