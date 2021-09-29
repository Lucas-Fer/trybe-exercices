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

// implemente seus testes aqui
module.exports = {sum, myRemove};