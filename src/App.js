import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      <Title src="/img/pokemonTitle.png" />
      <Pokemon
        name="Charizard"
        weight={90}
        awesome={true}
        terrifying={false}
        abilities={["Blaze", "Solar power", "Tough claws", "Drought"]}
        src={"/img/charizard.png"}
      />
      <Pokemon
        name="Bulbasaur"
        weight={6.9}
        awesome={true}
        terrifying={false}
        abilities={["Overgrow", "Chlorophyll"]}
        src={"/img/bulbasaur.png"}
      />
      <Pokemon
        name="Mewtwo"
        weight={122}
        awesome={true}
        terrifying={true}
        abilities={["Pressure", "Unnerve", "Steadfast", "Insomnia"]}
        src={"/img/mewtwo.png"}
      />
      <Pokemon
        name="Slow Poke"
        weight={65}
        awesome={false}
        terrifying={true}
        abilities={["Intimidate", "Unnerve"]}
        src={"/img/slowpoke.png"}
      />
    </div>
  );
}

export default App;
