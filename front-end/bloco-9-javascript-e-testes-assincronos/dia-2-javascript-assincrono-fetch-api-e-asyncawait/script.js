function append(data) {
    const ul = document.querySelector('ul');
    
    const li = document.createElement('li');
    const divNome = document.createElement('div');
    const divImage = document.createElement('div');
    const img = document.createElement('img');
  
    divNome.innerHTML = data.name;
    img.src = data.sprites.front_default;
    divImage.appendChild(img);
  
    li.appendChild(divNome);
    li.appendChild(divImage);
  
    ul.appendChild(li);
  }
  
  function fetchPokemon(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json() )
      .then((value) => {
        append(value);
      })
      .catch((error) => console.log(error) );
  }
  
  async function fetchPokemonAsyncAwait(pokemonName) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const value = await response.json();
      return value
    } catch (error) {
      console.log(error);
    }
  }
  
  function requestPokemonList() {
    fetchPokemon('pikachu');
    fetchPokemon('squirtle');
    fetchPokemon('lapras');
    fetchPokemon('mewtwo');
    fetchPokemon('blastoise');
  }
  
  async function requestPokemonListAsyncAwait() {
  
    const pokemonDataList = await Promise.all([
      fetchPokemonAsyncAwait('pikachu'),
      fetchPokemonAsyncAwait('squirtle'),
      fetchPokemonAsyncAwait('lapras'),
      fetchPokemonAsyncAwait('mewtwo'),
      fetchPokemonAsyncAwait('blastoise')
    ]);
  
    pokemonDataList.forEach((data) => {
      append(data);
    });
  
  }
  
  window.onload = requestPokemonListAsyncAwait;