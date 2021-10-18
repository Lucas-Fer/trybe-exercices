

const arrayCripto = () => {
  const url = 'https://api.coincap.io/v2/assets';
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.data);
};

const createLi = async () => {
  const bitCoins = await arrayCripto();
  bitCoins.filter((coin) => coin.rank <= 10).forEach((coin) => {
    const newLi = document.createElement('li');
    const ulBitcoin = document.querySelector('#crypto-container');
    newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

    ulBitcoin.appendChild(newLi);
  });
};

window.onload = () => createLi();