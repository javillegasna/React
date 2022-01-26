import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react/cjs/react.development";
const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>getPokemon(),[]);
    const API_URL = "https://pokeapi.co/api/v2/pokemon";
    const getPokemon = async(url=API_URL,page="")=>{
        
        try{
            let response = await axios.get(url+page).then(response => response.data);
            const newList =  response.results.map(pokemon=>pokemon.name);
            pokemons?setPokemons(newList):setPokemons(pokemons.concat(newList))
        }
        catch(err){
            console.log(err)
            const message = err.statusText||"Error";
            setPokemons([{name : message}])
        }
    }
    return (
        <>
        <input type="button" value="Fetch Pokemon" onClick={()=>getPokemon(API_URL,"?offset=0&limit=808")}/>
        <ul>
            {pokemons!==[] && pokemons.map((pokemon,index)=><li key={`pokemon${index}`}>{pokemon}</li>)}
        </ul>
        </>
     );
}
export default PokemonList;