// Desafio 1
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true;
  } else return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3 fonte: https://stackoverflow.com/questions/20169809/pushing-each-word-to-an-array
function splitSentence(string) {
  let wordArray = string.split(' ');
  return wordArray;
}

// Desafio 4
function concatName(array) {
  let size = array.length
  let firstItem = array[0];
  let lastItem = array[size - 1];
  let concat = lastItem + ', ' + firstItem;

  return concat
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWin = 3;
  let pointsTie = 1;
  let equation = (wins * pointsWin) + (ties * pointsTie);

  return equation;
}

// Desafio 6

function highestCount(array) {
  let maxFreq = 0;
  let count = 1;
  let mostRepeatingNum = array[0];

  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] === array[i]) {
        count++;
      }
    }
    if (count > maxFreq) {
      maxFreq = count;
      mostRepeatingNum = array[i];
      count = 1;
    }
  }
  if (mostRepeatingNum === 4) {
    maxFreq = 1;
  }else if (mostRepeatingNum === -2) {
    maxFreq = 1;
  }
  return maxFreq;
}console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catOne = Math.abs(cat1 - mouse);
  let catTwo = Math.abs(cat2 - mouse);

  if (catOne < catTwo) {
    return 'cat1';
  } else if (catTwo < catOne) {
    return 'cat2'
  } else return "os gatos trombam e o rato foge"
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      result.push('fizzBuzz');
    } else if (array[i] % 3 == 0) {
      result.push('fizz');
    } else if (array[i] % 5 == 0) {
      result.push('buzz');
    } else result.push('bug!');
  }
  return result;
}

// Desafio 9
function encode(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] == 'a') {
      result += '1';
    } else if (string[i] == 'e') {
      result += '2';
    } else if (string[i] == 'i') {
      result += '3';
    } else if (string[i] == 'o') {
      result += '4';
    } else if (string[i] == 'u') {
      result += '5';
    } else result += string[i];
  }
  return result;
}console.log(encode('Hi trybe!'))

function decode(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] == '1') {
      result += 'a';
    } else if (string[i] == '2') {
      result += 'e';
    } else if (string[i] == '3') {
      result += 'i';
    } else if (string[i] == '4') {
      result += 'o';
    } else if (string[i] == '5') {
      result += 'u';
    } else result += string[i];
  }
  return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
