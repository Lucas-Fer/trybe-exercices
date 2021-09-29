function sum(a,b) {
  if (typeof b !== 'number' || typeof b !== 'number') {
    throw Error('parameters must be numbers');
  } else {
    return a + b;
  }
}

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== item) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0 && typeof num == 'number') {
    return 'fizz';
  } else if (num % 5 === 0 && typeof num == 'number') {
    return 'buzz';
  } else if (typeof num !== 'number') {
    return false;
  } else {
    return num;
  }
}

// implemente seus testes aqui
module.exports = {sum, myRemove, myFizzBuzz};