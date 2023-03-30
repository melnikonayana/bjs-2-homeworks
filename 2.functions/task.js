function getArrayParams(...arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let avg = arr.reduce((accumulator, currentValue) => accumulator + currentValue) / arr.length;

    avg = avg.toFixed(2);
    avg = parseFloat(avg);

    return {min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
    let initialValue = 0;
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

    return sum;
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
        } else {
            sumOddElement += arr[i];
        }
    }
    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    if (arr.length === 0) {
        return 0;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
            countEvenElement++;
        }
    }
    return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = func(...arrOfArr[0]);
    for (let i = 0; i < arrOfArr.length; i++) {
        const result = func(...arrOfArr[i]);
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }
    return maxWorkerResult;
}
