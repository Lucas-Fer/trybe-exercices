function sum(a,b) {
  if (typeof b !== 'number' || typeof b !== 'number') {
    throw Error('parameters must be numbers');
  } else {
    return a + b;
  }
}

module.exports = {sum};