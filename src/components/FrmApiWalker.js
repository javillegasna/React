import axios from "axios"
import { useEffect, useState } from "react";
const FrmApiWalker = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const catagoriesList = getData();
        setCategories(Object.keys(catagoriesList))
    }, []);
    const getData= async({id=""})=>{
        const API_URL="https://swapi.dev/api/";
        const list = await axios.get(API_URL+id)
        .then(response=>response.data)
        .catch(error=>error);
        console.log(list);
        return list
    }
    return (
        <form>
            <label htmlFor="categories"> Search for: </label>
            <select name="categories" id="categories" onChange={()=>getData()}>
                {categories.map(category=><option value={category}> {category} </option>)}
            </select>
        </form>
     );
}
export default FrmApiWalker;