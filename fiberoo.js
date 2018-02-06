function fib() {
  const x = [0, 1];

  for (let i = 2; i < 100; i++){
    x[i] = x[i - 1] + x[i - 2];
  }
  return x;
}


function numsToStrings(array) {
  return _.map(array, function (num) { return `${num}`; });
}

console.log(numsToStrings(fib()));

function numEvenNums(array) {
  return _.filter(array, num => ((num % 2) === 0)).length;
}

console.log(numEvenNums(fib()));
