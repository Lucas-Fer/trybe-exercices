const randomNumber = () => Math.floor(Math.random() * 100);
// console.log(randomNumber());
const upperString = (string) => string.toUpperCase();
const getFirstLetra = (string) => string[0];
const twoStringsTogether = (stringA, stringB) => stringA + stringB;

function fetchApi() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json()
      .then(json => response.ok ? Promise.resolve(json) : Promise.reject(json))
    );
}
module.exports = { randomNumber, upperString, getFirstLetra, twoStringsTogether, fetchApi };