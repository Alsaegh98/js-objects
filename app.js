const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
}

console.dir(pokemon, { maxArrayLength: null });

console.log('=============================================');

console.log(game);

console.log('=============================================');

  //////////////////EX1
  console.dir(pokemon , {maxArrayLength: null});

console.log('Exercise 1 result:\n',pokemon[58]);

////////////////////////EX2

//////console.log('Exercise 2 result:\n', game;////////

////////////////////////EX3

game.difficulty = 'hard';

console.log('Exercise 3 result:\n', game);

/////////////////////EX4

game.party = [];
const starterpokemon = pokemon.find(pokemon => pokemon.starter == true);

if (starterpokemon){

    game.party.push(starterpokemon);

}


console.log('Exercise 4 result:\n', game.party);

////////////////////EX5
const additionalPokemon = [
    pokemon.find(pokemon => pokemon.type == "water"),
    pokemon.find(pokemon => pokemon.type == "fire"),
    pokemon.find(pokemon => pokemon.hp <35)
];

for(const pokemon of additionalPokemon){

    if (pokemon){
        game.party.push(pokemon);
    }
}   

console.log('Exercise 5 result:\n', game.party);

 ////////////////////EX6


 for(const gym of game.gyms){

    if (gym.difficulty < 3){
        gym.completed = true;
    }
 }


console.log('Exercise 6 result:\n', game.gyms);

/////////////////////EX7
 console.log(additionalPokemon);
additionalPokemon.splice(0, 1,pokemon [1] );

additionalPokemon.splice(1, 1,pokemon [7] );

additionalPokemon.splice(2, 0 ,pokemon [4] );



console.log('Exercise 7 result:\n', additionalPokemon);


////////////////////////EX8


for(const pokemon of game.party){
}
    

    

    console.log('Exercise 8 result:\n', game.party);



    ////////////////////////EX9

    const starterpokemonIDS = [];

    for(const poke of pokemon){

        if (poke.starter === true){



            console.log('Exercise 9 result:\n', poke.name);
        }
    }
    
    ////////////////////////EX10

    game.catchpokemon = function(catchpokemon){
        game.party.push(catchpokemon)
    }

    game.catchpokemon(pokemon[2]);
    
    console.log('Exercise 10 result:\n', game.party);



    ///////////////////////EX11
    game.catchpokemon = function(catchpokemon){
        game.party.push(catchpokemon)
    
    game.items[1].quantity--;
    }
   

    console.log('Exercise 11 result:\n', game.party);




    /////////////////////EX12

    for(const gym of game.gyms){

        if (gym.difficulty < 6){
            gym.completed = true;
        }
     }
    
    
    console.log('Exercise 12 result:\n', game.gyms);


    /////////////////////EX13
      
        game.gymStatus = function() {
          const gymTally = {
            completed: 0,
            incomplete: 0
          };
      
          this.gyms.forEach(gym =>{
            if (gym.completed){
                gymTally.completed++;
            }
            else{
                gymTally.incomplete++;
            }
          });
      
        
      console.log('Exercise 13 result:\n',gymTally);

        };

     game.gymStatus();

     /////////////////////EX14

     game.partycount = function(){
        return this.party.length;
     };

     const numofpokemon = game.partycount();

     console.log('Exercise 14 result:\n',numofpokemon);


     ///////////////////////EX15

     for(const gym of game.gyms){

        if (gym.difficulty < 8){
            gym.completed = true;
        }
     }
    
    
    console.log('Exercise 15 result:\n', game.gyms);


    ///////////////////////EX16

    console.log('Exercise 16 result:\n', game);
