import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";












const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
    src:"/img/charizard.png"
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
    src:"/img/bulbasaur.png"
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
    src:"/img/mewtwo.png"
    
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
    src:"/img/slowpoke.png"
  },
  {
    name: "Pikachu",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
    src:"/img/Pikachu.png"
  },
  {
    name: "Charmander",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
    src:"/img/charmander.jpg"
  },
  {
    name: "Froakie",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
    src:"/img/froakie.png"
    
  },
  {
    name: "Litten",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
    src:"/img/litten.jpg"
  },

];


function App() {
  return (
    <main className ="container">
<Title
      src = "/img/pokemonTitle.png"
      />

      <div className="row">
   {all_pokemon.map((pokemon,index)=>
    
<div key={index} className="col-md-6 col-lg-4">
<Pokemon
  name={pokemon.name}
  weight={pokemon.weight}
  awesome={pokemon.awesome}
  terrifying={pokemon.terrifying}
  abilities={pokemon.abilities}
  src ={pokemon.src}
/>
</div>





   )}
    
   
    
    
    


      </div>
      
    </main>
   

    
  );
}

export default App;
