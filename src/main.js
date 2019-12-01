/* Manejo del DOM */
const printPoke = document.getElementById("rootCard");

const pokeData = POKEMON.pokemon;

const eachPoke = (pokemon) => {
  for (let pokeOne = 0; pokeOne < pokemon.length; pokeOne++) {
    if (pokemon[pokeOne].hasOwnProperty('candy_count')) {

      let typesOne = (pokemon[pokeOne].type).map(function (x) {
        return ` <span class="${x} typeFormat">${x}</span>`
      });

      let weaknessOne = (pokemon[pokeOne].weaknesses).map(function (x) {
        return ` <span class="${x} typeFormat">${x}</span>`
      });

      printPoke.innerHTML += `
      <div class="maincontainer">
      <div class="thecard ">
        <div class="thefront">
          <div class="imageContainer">
    
            <img src="${pokemon[pokeOne].img}" class="card-img-top">
          </div>
    
          <div class="card-body card-header">
    
    
    
            <p class="list-group-item card-title   ">${pokemon[pokeOne].name}</p>
            <p class="list-group-item">N° PokeDex: ${pokemon[pokeOne].num}</p>
            <div class="list-group-item pOfTypes"> Type :<div class="divOfTypes">${typesOne}</div>
            </div>
            
          </div>
        </div>
      
      <div class="theback">
        <ul class="list-group list-group-flush">
          <p class="list-group-item">Egg : ${pokemon[pokeOne].egg}</p>
          <li class="list-group-item liOfTypes"> Weakness : <div class="divOfTypes">${weaknessOne}</div>
          </li>
          <li class="list-group-item">Spawn Chance : ${pokemon[pokeOne].spawn_chance}</li>
          <li class="list-group-item"> Weight : ${pokemon[pokeOne].weight}</li>
          <li class="list-group-item"> Candy : Need ${pokemon[pokeOne].candy_count} ${pokemon[pokeOne].candy}</li>
      </div>
      </ul>
    </div>
    </div>`
    } else {
      let typesOne = (pokemon[pokeOne].type).map(function (x) {
        return ` <span class="${x} typeFormat ">${x}</span>`
      });
      let weaknessOne = (pokemon[pokeOne].weaknesses).map(function (x) {
        return ` <span class="${x} typeFormat">${x}</span>`
      });
      let numberOfCandy = pokemon[pokeOne].candy_count;
      if (numberOfCandy == undefined ) {
        numberOfCandy = ""
      }

      let Candy = pokemon[pokeOne].candy;
      if (Candy == "None" ) {
        Candy = "Candies"
      }
      printPoke.innerHTML += `
      <div class="maincontainer">
      <div  class="thecard ">
      <div class="thefront">
      
      <div class="imageContainer">
  
      <img src="${pokemon[pokeOne].img}" class="card-img-top" >
     </div>
      
    <div class="card-body card-header"> 
      <p class="list-group-item card-title  " >${pokemon[pokeOne].name}</p> 
      <p class="list-group-item" >N°  PokeDex: ${pokemon[pokeOne].num}</p> 
      <div class="list-group-item pOfTypes"> Type :<div class="divOfTypes">${typesOne}</div>
      </div>
    </div>
        </div>  
    <div class="theback"> <ul class="list-group list-group-flush"> 
       <p class="list-group-item" >Egg : ${pokemon[pokeOne].egg}</p> 
    <li class="list-group-item liOfTypes"  > Weakness :<div class="divOfTypes">${weaknessOne}</div> </li>
    <li class="list-group-item" >Spawn Chance : ${pokemon[pokeOne].spawn_chance}</li>
    <li class="list-group-item" > Weight  : ${pokemon[pokeOne].weight}</li>
    <li class="list-group-item" > Candy : Don't need ${numberOfCandy}  ${Candy}</li>
   </div>
    </ul> </div> 
    </div> `
    }
  }
}


document.getElementById('down').addEventListener('click', downPoke);

function downPoke() {
  printPoke.innerHTML = ``;
  eachPoke(pokeData.sort(sortArrsToObjects).reverse());
}
document.getElementById('up').addEventListener('click', upPoke);

function upPoke() {
  printPoke.innerHTML = ``;
  eachPoke(pokeData.sort(sortArrsToObjects));
}

const pokemonFiltrado = document.getElementById("tipoDePokemon");
pokemonFiltrado.addEventListener("change", () => {
  const filtrando = filtrarPokemon(pokeData, pokemonFiltrado.value);
  printPoke.innerHTML = ``;

  let pokeStat = calculusStats(pokeData, filtrando);
  const pokeBar = document.getElementById("pokeBar");
  const titlePoke = document.getElementById("titlePoke");
  pokeBar.innerHTML = ``;
  titlePoke.innerHTML = ``;
  titlePoke.innerHTML = `
   percentage of Pokemons by type ${ pokemonFiltrado.value} : ${pokeStat}%`;
  pokeBar.innerHTML += ` 
   <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: ${pokeStat}%" aria-valuenow="${pokeStat}" aria-valuemin="0" aria-valuemax="100"></div>`;
  eachPoke(filtrando);
});


window.onload = function () {
  upPoke();
};
