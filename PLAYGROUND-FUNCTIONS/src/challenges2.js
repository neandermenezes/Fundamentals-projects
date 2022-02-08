// Desafio 10
function techList(array, nome) {
  let techs = [];
  array.sort();

  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let key in array) {
    array[key] = {
      tech: array[key],
      name: nome,
    };
    techs.push(array[key]);
  }
  return array;
}

// Desafio 11
function generatePhoneNumber(array) {
  let result = '';

  if (array.length != 11) {
    return 'Array com tamanho incorreto.'
  } else if (numberRepetition(array) || numberCheck(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  result += '('
  for (let i = 0; i < 2; i += 1) {
    result += array[i];
  }
  result += ') ';

  for (let i = 2; i < 7; i += 1) {
    result += array[i];
  }
  result += '-';

  for (let i = 7; i < array.length; i += 1) {
    result += array[i];
  }
  return result;
}


function numberRepetition(array) {
  let count = 1;
  let overRepeats = false;

  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        count += 1;
      }
    }
    if (count === 3) {
      overRepeats = true;
    }
    count = 1;
  }
  return overRepeats;
}


function numberCheck(array) {
  let flag = false;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
      flag = true;
    }
  }
  return flag;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let ab = lineA + lineB;
  let bc = lineB + lineC;
  let ac = lineA + lineC;
  let absoluteab = Math.abs(lineA - lineB);
  let absolutebc = Math.abs(lineB - lineC);
  let absoluteac = Math.abs(lineA - lineC);

  if (lineA < bc && lineB < ac && lineC < ab && lineA > absolutebc && lineB > absoluteac && lineC > absoluteab) {
    return true
  } else return false;
}

// Desafio 13 fonte: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
function hydrate(string) {
  let numbers = string.match(/\d+/g).map(Number);
  let result = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    result += numbers[i];
  }
  if (result === 1) {
    return (result + ' copo de água')
  }
  return (result + ' copos de água')
}console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"))


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
