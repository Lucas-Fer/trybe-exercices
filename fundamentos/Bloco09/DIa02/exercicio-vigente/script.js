function append(data) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const divName = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divName.innerHTML = data.name;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divName);
  li.appendChild(divImage);

  ul.appendChild(li);
}


function fetchPokemon(pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    // deu certo o caminho da API, ENTÃO retorna um JSON para pegar as informações melhor
    .then((response) => response.json())
    // deu certo, então cria um objeto
    .then((data) => {
      const pokemon = {
        name: data.name,
        imageUrl: data.sprites.front_default,
      };
      // passa a função append
      append(pokemon);
    })
    // caso de algo errado
    .catch((error) => console.log(error));
}



function requestPokemons() {
  fetchPokemon('ditto');
  fetchPokemon('bulbasaur');
  fetchPokemon('charmander');
  fetchPokemon('squirtle');
  fetchPokemon('dratini');

}

window.onload = requestPokemons;