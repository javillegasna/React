import axios from "axios";
import { useEffect, useState } from "react";

const FrmApiWalker = ({setCardData}) => {
  //Operative const
  const API_URL = "https://swapi.dev/api/";
  //States of component
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("people");
  const [id, setId] = useState("1");

  //Utilities
  const getData = async (query = "") =>
    axios
      .get(API_URL + query)
      .then((response) => response.data)
      .catch((error) => console.error(error));

  //Handlers
  const handlerId = (event)=>{
    const{value}=event.target;
    setId(value)
  }
  const handlerSearch=(query)=>(event)=>{
    getData(query).then(obj=>setCardData(obj));
  }
  const handlerCurrentCategory = (event)=>setCurrentCategory(event.target.value)

 //Effects
  useEffect(() => {
    getData().then((categories) => setCategories(Object.keys(categories)));
  }, []);
  return (
    <form>
      <label htmlFor="categories"> Search for: </label>
      <select name="categories" id="categories" onChange={handlerCurrentCategory}>
        {categories.map((category, indx) => (
          <option key={`category${indx}`} value={category}>
            {category}
          </option>
        ))}
      </select>
      <label htmlFor="inputId">id: </label>
      <input type="number" name="inputId" id="inputId" placeholder="1" value={id} onChange={handlerId} />
      <input type="button" value="Search" onClick={handlerSearch(`${currentCategory}/${id}`)} />
    </form>
  );
};
export default FrmApiWalker;
