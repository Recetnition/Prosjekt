show();
function show() {
  document.getElementById('app').innerHTML = `
    <header>
        <img src="./img/pngegg.png" alt= "Pokemon logo" style="width:300px;height:80px;"> 
    </img>
    
    <nav>
      <a href="index.html"> Home </a>
      <a href="stats.html"> Pokemon </a>
    </nav>
    </header>  
   <div>¨
  ${printList()}
   </div>
    `;
    
}
let list = [];
let pokemonObj;
async function getPokemons() {
  let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  let data = await response.json();
  console.log(data);
  list = data.results
}

printPokemon();

async function printPokemon() {
  await getPokemons();
for( let i = 0; i < list.length; i++) {
 //  console.log(list[i].name) 
  
}}

async function getSinglePokemonInfo(index) {
  await getPokemons();
  let response = await fetch(list[index].url)
  let data = await response.json();
  console.log(data);
  pokemonObj = data
}

async function pokemonView(index) {
  await getSinglePokemonInfo(index);
  console.log(pokemonObj.name)
  let pokemonWeight = pokemonObj.weight / 10
  let pname = pokemonObj.name
  let name = pname.charAt(0).toUpperCase() + pname.slice(1);
  let dexEntry = pokemonObj.id
  let html = '';
  html += `<header>
          <img src="./img/pngegg.png" alt= "Pokemon logo" style="width:300px;height:80px;"> 
        </img>
    
    <nav>
      <a href="index.html"> Home </a>
      <a href="stats.html"> Pokemon </a>
    </nav>
    </header>  
   <div class="pokeInfo">
  
  <ul>
  <img src="${pokemonObj.sprites.front_default}" width="200px" height="200px"></img>
  <img src="${pokemonObj.sprites.back_default}" width="200px" height="200px"></img>
  <li>#${dexEntry}</li>
  <li>${name}</li>
  <li>${pokemonWeight} Kg</li>
      ${pokemonInfoTypes()}
      ${pokemonInfoAbilities()}</ul>
  
      ${pokemonInfoMovesLearned()}
      <table>
<th>Base Stats</th>
 </tr> 
 <tr>
 ${pokemonInfoStats()}
 
 </tr>
  </table>
  <table>
  <th>Moves learned by ${name}</th>
   </tr> 
   <tr>
  ${pokemonInfoMoves()}
  </tr>
  </table>
   </div>`;

   document.getElementById('app').innerHTML = html;
}
  
function pokemonInfoAbilities() {
  let html = ''; 
  for(let i = 0; i < pokemonObj.abilities.length; i++){
  let abilities = pokemonObj.abilities[i].ability.name
  let name = abilities.charAt(0).toUpperCase() + abilities.slice(1);
      html += `
              <li> 
              ${name}
              </li>
           
      `;
    }
      return html 
  }
  function pokemonInfoMoves() {
    let html = ''; 
    for(let i = 0; i < pokemonObj.moves.length; i++){
    let moves = pokemonObj.moves[i].move.name
    let name = moves.charAt(0).toUpperCase() + moves.slice(1);
    let moveLearned = pokemonObj.moves[i].version_group_details[0].move_learn_method.name
    let name2 = moveLearned.charAt(0).toUpperCase() + moveLearned.slice(1);
        html += `
        <tr><td> 
                ${name} | ${name2}
        </tr></td> 
        `;
      }
        return html 
    }
  function pokemonInfoTypes() {
    let html = ''; 
    for(let i = 0; i < pokemonObj.types.length; i++){
    let type = pokemonObj.types[i].type.name
    let name = type.charAt(0).toUpperCase() + type.slice(1);
        html += `
                <li class=${type}>
                ${name}
                </li>
        `;
      }
        return html 
    }
  function pokemonInfoStats() {
    let html = ''; 
    for(let i = 0; i < pokemonObj.stats.length; i++){
    let stats = pokemonObj.stats[i].stat.name
    let name = stats.charAt(0).toUpperCase() + stats.slice(1);
    
        html += `

        <tr><td> ${name} ${pokemonObj.stats[i].base_stat}</td>  </tr> 
        
        
                
        `;
      }
        return html 
    }
    function pokemonInfoMovesLearned() {
 
      }

function printList() {
  
    
  let html = '';
  for(let i = 0; i < model.pokemonData.length; i++){
     html += ` <div class="infocard">
                  <span onclick="pokemonView(${i})">${model.pokemonData[i].img}</span> </br>
                  <small># ${model.pokemonData[i].id} </small></br>
                  Name: ${model.pokemonData[i].pokemon} </br>
                   
                  Type: <span class=${model.pokemonData[i].type1}>${model.pokemonData[i].type1} </span>
                  <span class=${model.pokemonData[i].type2}>${model.pokemonData[i].type2}</span> </br>
                  Species: ${model.pokemonData[i].species} </br>
                  Height: ${model.pokemonData[i].height} </br>
                  Weight: ${model.pokemonData[i].weight} </br>
              </div> `
  } 
  return html;
}



// async function getPokemon() {
//   let response = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
//   let data = await response.json();
//   console.log(data);
//   list.push(data)
// }






























// // let pokemon = "";


// show();
// function show() {
//   document.getElementById('app').innerHTML = `
//     <header>
//         <img src="./img/pngegg.png" alt= "Pokemon logo" style="width:300px;height:80px;"> 
//     </img>
    
//     <nav>
//       <a href="index.html"> Home </a>
//       <a href="stats.html"> Pokemon </a>
//     </nav>
//     </header>  
    
//     ${printList()}
    
    
   
//     `;
    
// }






// api url

  
// // Defining async function
// async function getdataPokemon() {
    
//     // Storing response
//     let response = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
    
//     // Storing data in form of JSON
//     let data = await response.json();
//     console.log(data);
//     dataPokemon = data.items;
    
// }




// async function getAlotOfPokemon(){
//   for (let i = 0; i < 3; i++)
//   await getPokemon();
// }
// async function printPokemon(){
//     await getAlotOfPokemon();
//     let html = "";
//     for(let i = 0; i < abilities.length; i++){
//         html += `
//         <div>${abilities[i]}</div>
//         `; 
//     }
//     return html;
// }

// async function printPokemon() {
//     await getdataPokemon();
//     let html = "";
//     for(let i = 0; i < 0; i++){
//        html +=` <div class="infocard"> 
//                 ${results[i].name}
//                 </div>
//        `;
//     }
   
// }
// // Function to define innerHTML for HTML table
// function show() {
//     let tab = 
//         `<tr>
//           <th>Name</th>
//           <th>#</th>
//           <th>Type</th>
//          </tr>`;
//     for ( let i = 0; i < 151 ; i++) {
            
//             tab += `<tr> 
//             <td>${i.name} </td>
//             <td>${i.id}</td>
//             <td>${i.type}</td>        
//         </tr>`;
//         }
//     // Loop to access all rows 
    
// };


// https://pokeapi.co/docs/v2#pokemon tester api med Joakim sin basis
// async function getdataPokemon(){
//   let response = await fetch("https://pokeapi.co/docs/v2#pokemon")
//   let data = await response.json();
//   dataPokemon = data.items;
// }

// async function getPokemon(){
//   let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
//   let data = await response.json();
// }

// async function getAlotOfPokemon(){
//   for (let i = 0; i <100; i++)
//   await getPokemon();
// }

// async function printPokemon() {
//   await getAlotOfPokemon();
//   let html = "";
//   for(let i = 0; i < pokemonpictures.length; i++){
//     html += `<div onclick="console.log('hei')" class="test">
//     <div><div></div>${i+1}</div>
//             <img class="pokepic" height=200px width=200px src="${pokemonpictures[i]}"></img>
//             </div>`;
//   }
//   show();
// }
