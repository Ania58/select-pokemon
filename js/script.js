const container2 = document.querySelector('.container');
const select = document.getElementById('pokemon-select');
const button = document.getElementById('get-pokemon');
let elemento = document.createElement('div');

function traerPokemon(pokemon) {
    elemento.innerHTML = '';
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) 
    .then(response => {
        if (!response.ok) {
            throw new Error('Ha habido un error en el envio'); 
        }
        return response.json();
    }).then((data) => {
        console.log(data);
        console.log(data.sprites.other.home.front_default);
        let fuente = data.sprites.other.home.front_default;
        elemento.classList.add('contenedor1');
        let elemento2 = document.createElement('div');
        elemento2.classList.add('contenedor2');
        let imagen = document.createElement('img');
        imagen.src = fuente;
        
        let plantilla = `<p><span class="plantilla">Nombre: </span>${data.name}.</p>
                         <p><span class="plantilla">Tipos: </span>${data.types[0].type.name}.</p> 
                         <p><span class="plantilla">Altura: </span>${data.height} centimetros.</p> 
                         <p><span class="plantilla">Peso: </span>${data.weight} gramos.</p>` 

        container2.appendChild(elemento); 
        elemento.appendChild(imagen);
        elemento.appendChild(elemento2);
        elemento2.innerHTML = plantilla;
    })
    .catch(error => {
        console.log('Ha habido un error en la llegada de los datos');
    });
}

button.addEventListener("click", () => {
    if (select.value === "bulbasaur") {
        traerPokemon("bulbasaur"); 
    }
    else if (select.value === "charmander") {
        traerPokemon("charmander"); 
    }
    else {
        traerPokemon("squirtle"); 
    }
});