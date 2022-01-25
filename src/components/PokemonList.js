import { useState } from "react";

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const API_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=808";
    const getPokemon = async(url=API_URL)=>{
        
        try{
            let response = await fetch(url).then(response => response.json());
            const newList =  response.results.map(pokemon=>pokemon.name);
            setPokemons(pokemons.concat(newList))
        }
        catch(err){
            console.log(err)
            const message = err.statusText||"Error";
            setPokemons([{name : message}])
        }
    }
    return (
        <>
        <input type="button" value="Fetch Pokemon" onClick={()=>getPokemon()}/>
        <ul>
            {pokemons!==[] && pokemons.map((pokemon,index)=><li key={`pokemon${index}`}>{pokemon}</li>)}
        </ul>
        </>
     );
}
export default PokemonList;