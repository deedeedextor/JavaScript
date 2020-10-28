function solve(x, y, z) {
  let sum = x.length + y.length + z.length;
  let avrg = Math.floor(sum / 3);

  console.log(sum);
  console.log(avrg);
}

solve("chocolate", "ice cream", "cake");

function solve2(...params) {
  let sum = params.reduce((a, b) => a + b.length, 0);
  let avrg = Math.floor(sum / params.length);

  return [sum, avrg];
}

console.log(solve2("chocolate", "ice cream", "cake").join("\n"));

function solve3(x, y, operator) {
  return eval(`${x}${operator}${y}`);
}

console.log(solve3(5, 6, "+"));
console.log(solve3(3, 5.5, "*"));

const operationMap = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
};

function solve4(operator, ...params) {
  return params.reduce(
    (a, b) => operationMap[operator](a, Number(b)),
    Number(params.shift())
  );
}

console.log(solve4("+", -10, 5));

function solve5(x, y) {
  x = Number(x);
  y = Number(y);
  let result = 0;

  for (let i = x; i <= y; i++) {
    result += i;
  }

  return result;
}

console.log(solve5("1", "5"));
console.log(solve5("-8", "20"));

function solve6(...params) {
  return Math.max(...params);
}

console.log(`The largest number is ${solve6(5, -3, 16)}`);

function solve7(...params) {
  return params.sort((a, b) => a - b).pop();
}

console.log(`The largest number is ${solve7(5, -3, 16)}`);

function solve8(input) {
  let result;

  let inputType = typeof input;

  if (inputType === "number") {
    result = String((Math.pow(input, 2) * Math.PI).toFixed(2));
  } else {
    result = `We can not calculate the circle aresa, because we receive a 
        ${inputType}`;
  }

  return result;
}

console.log(solve8(5));
console.log(solve8("name"));

function solve9(delimeter, x = 5) {
  let result = new Array(x);

  for (let i = 0; i < 5; i++) {
    result[i] = delimeter.repeat(x).split("").join(" ");
  }

  return result.join("\n");
}

console.log(solve9("*", 4));

const daysMap = {
  Monday: 1,
  Friday: 5,
  Sunday: 7,
};

function solve10(d) {
  return daysMap[d] ? daysMap[d] : "error";
}

console.log(solve10("Friday"));
console.log(solve10("Invalid"));

const add = (x, y) => x + y;
const addInverse = (x, y) => x + 1 / y;
const concat = (x, y) => x + y.toString();

function solve11(...params) {
  return [
    params.reduce(add, 0),
    params.reduce(addInverse, 0),
    params.reduce(concat, ""),
  ];
}

console.log(solve11(1, 2, 3));

function solve12(str) {
  return str
    .match(/\w+/gim)
    .map((x) => x.toUpperCase())
    .join(", ");
}

console.log(solve12("Hi, how are you?"));

function SumFirstLast(arr) {
  return +arr.shift() + +arr.pop();
}

console.log(SumFirstLast(["20", "30", "40"]));

function EvenPositionElement(arr) {
  return arr.filter((item, i) => i % 2 == 0).join(" ");
}

console.log(EvenPositionElement(["20", "30", "40"]));

function ProcessOddNumbers(arr) {
  return arr
    .filter((item, i) => i % 2 !== 0)
    .map((x) => x * 2)
    .reverse()
    .join(" ");
}

console.log(ProcessOddNumbers([3, 0, 10, 4, 7, 3]));

function SmallestTwoNumbers(arr) {
  return arr
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(" ");
}

console.log(SmallestTwoNumbers([3, 0, 10, 4, 7, 3]));

function biggestElement(matrix) {
  let biggestNum = Number.NEGATIVE_INFINITY;
  matrix.forEach((row) =>
    row.forEach((col) => (biggestNum = Math.max(biggestNum, col)))
  );
  console.log(biggestNum);
}

biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);

function diagonalSums1(matrix) {
  let mainSum = 0,
    secondarySum = 0;
  for (let row = 0; row < matrix.length; row++) {
    mainSum += matrix[row][row];
    secondarySum += matrix[row][matrix.length - row - 1];
  }
  console.log(mainSum + " " + secondarySum);
}

diagonalSums1([
  [20, 40],
  [10, 60],
]);

/*function diagonalSums2(input) {​
    let firstDiagonal = 0;​
    let secondDiagonal = 0;​
    let firstIndex = 0;​
    let secondIndex = input[0].length - 1;​

    input.forEach(array => {​
        firstDiagonal += array[firstIndex++];​
        secondDiagonal += array[secondIndex--];​
    });​

    console.log(firstDiagonal + ' ' + secondDiagonal);​
}​

diagonalSums2([[20, 40], [10, 60]]);*/

function equalNeighbours(matrix) {
  let neighbors = 0;

  for (let row = 0; row < matrix.length - 1; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] == matrix[row + 1][col]) {
        neighbors++;
      }
      if (matrix[row][col] == matrix[row][col + 1]) {
        neighbors++;
      }
      if (
        row == matrix.length - 2 &&
        matrix[row + 1][col] == matrix[row + 1][col + 1]
      ) {
        neighbors++;
      }
    }
  }
  console.log(neighbors);
}

function equalNeighborsCount(matrix) {
  let neighbors = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (row < matrix.length - 1) {
        if (matrix[row][col] == matrix[row + 1][col]) {
          neighbors++;
        }
      }
      if (col < matrix[row].length) {
        if (matrix[row][col] == matrix[row][col + 1]) {
          neighbors++;
        }
      }
    }
  }
  return neighbors;
}

equalNeighbours([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);

function PrintArrayWithDelimiter(arr) {
  let delimiter = arr.pop();

  console.log(arr.join(delimiter));
}
PrintArrayWithDelimiter([
  "How about no?",
  "I",
  "will",
  "not",
  "do",
  "it!",
  "_",
]);

function printEveryNthElement(arr) {
  let step = +arr.pop();

  for (let i = 0; i < arr.length; i += step) {
    console.log(arr[i] + "\n");
  }
}
printEveryNthElement(["1", "2", "3", "4", "5", "6"]);

function addOrRemoveElements(arr) {
  let newArray = [];
  let initialNumber = 1;

  arr.forEach((command, initialNumber) => {
    initialNumber++;

    command === "add" ? newArray.push(initialNumber) : newArray.pop();
  });

  console.log(
    newArray.length === 0 ? console.log("Empty") : newArray.join("\n")
  );
}
addOrRemoveElements(["remove", "remove", "remove"]);

function rotateArray(arr) {
  let rotations = +arr.pop();

  for (let i = 0; i < rotations; i++) {
    let last = arr.pop();
    arr.unshift(last);
  }
  console.log(arr.join(" "));
}
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);

function extractIncreasingSubsequences(arr) {
  let result = [];
  let max = arr[0];

  arr.forEach((element) => {
    if (element != undefined) {
      if (element >= max) {
        max = element;
        result.push(element);
      }
    }
  });
  console.log(result.join("\n"));
}
extractIncreasingSubsequences([20, 3, 2, 15, 6, 1]);

function sortAnArrayBy2Createria(arr) {
  arr.sort(function (a, b) {
    if (a.length > b.length) {
      return 1;
    }
    if (a.length < b.length) {
      return -1;
    }
    if (a.length == b.length) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
    }
  });
  console.log(arr.join("\n"));
}
sortAnArrayBy2Createria(["test", "Deny", "omen", "Default"]);

function magicMatrices(matrix) {
    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        let rowSum = 0;
        rowSum = matrix[col].reduce((a, b) => a + b, 0);
    
        for (let row = 0; row < matrix.length; row++) 
        colSum += matrix[row][col];
    
      if (rowSum !== colSum) {
        return false;
      }
    }
  return true;
}
console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));

    function ticTakToe(arr){
      let matrix = [[false, false, false],
      [false, false, false],
      [false, false, false]];
      let player = 'X';
      let hasWon = false;

      for (let i = 0; i < arr.length; i++) {
          let [row, col] = arr[i].toString().split(' ').map(Number);

          if (matrix[row][col] === false) {
              matrix[row][col] = player;
              if (ifWins(matrix, player)) {
                hasWon = true;
                break;
            }
 
            player = player === 'X' ? 'O' : 'X';
        } else if (matrix.every(row => row.every(el => el !== false))) {
            break;
        }
        else {
            console.log('This place is already taken. Please choose another!');
        }
    }
 
    if (hasWon) {
        console.log(`Player ${player} wins!`);
    } else {
        console.log('The game ended! Nobody wins :(');
    }
 
    printMatrix(matrix);
  }     

function ifWins(matrix, player) {
    return checkFirstDiagonal(matrix, player) ||
        checkSecondDiagonal(matrix, player) ||
        checkCols(matrix, player) ||
        checkRows(matrix, player);
}

function checkFirstDiagonal(matrix, player) {
    return matrix[0][0] === player &&
    matrix[1][1] === player
        && matrix[2][2] === player;
}

function checkSecondDiagonal(matrix, player) {

    return matrix[2][0] === player
        && matrix[1][1] === player
        && matrix[0][2] === player;
}

function checkRows(matrix, player) {

    return (matrix[0][0] === player
        && matrix[0][1] === player && matrix[0][2] === player)
        || (matrix[1][0] === player && matrix[1][1] === player
            && matrix[1][2] === player)
        || (matrix[2][0] === player && matrix[2][1] === player
            && matrix[2][2] === player);
}

function checkCols(matrix, player) {
    return (matrix[0][0] === player &&
      matrix[1][0] === player
        && matrix[2][0] === player)
        || (matrix[0][1] === player && matrix[1][1] === player
            && matrix[2][1] === player) ||
        (matrix[0][2] === player && matrix[1][2] === player
            && matrix[2][2] === player);
}

function printMatrix(matrix) {
  matrix.forEach(row => {
        console.log(row.join('\t'));
    });
}

ticTakToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]);
    
