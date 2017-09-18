const list = [1, 3, 2, 3, 4, 56, 78, 90, 12, 2, 3, 4, 6, 8, 0, 4, 3];

function sumFor(input) {
  let sum = 0;
  for (const x of input) {
    sum += x;
  }
  return sum;
}

function sumWhile(input) {
  let sum = 0;
  let x = input.length - 1;
  while (x !== -1) {
    sum += input[x--];
  }
  return sum;
}

function sumRecursion(input) {
  if (input.length === 0) {
    return 0;
  }
  return input[0] + sumRecursion(input.slice(1, input.length));
}

function sumTheSimpleWay(input) {
  return _.reduce(input, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor(list));

console.log(sumWhile(list));

console.log(sumRecursion(list));

console.log(sumTheSimpleWay(list));
