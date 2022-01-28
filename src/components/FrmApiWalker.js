import axios from "axios";
import { useEffect, useState } from "react";
const FrmApiWalker = ({ setCardData, setError }) => {
  //Operative const
  const API_URL = "https://swapi.dev/api/";
  //States of component
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("people");
  const [id, setId] = useState("1");

  //Utilities
  const getData = async ({
    query = "",
    setState = setCategories,
    customMessage = "",
  }) =>
    axios
      .get(API_URL + query)
      .then((response) => setState(response.data))
      .catch(function (error) {
        setError({ state: false, message: customMessage });
      });
  //Handlers
  const handlerId = (event) => {
    const { value } = event.target;
    setId(value);
  };
  const handlerSearch = (query) => (event) => {
    getData({
      query,
      setState: setCardData,
      customMessage: "Estos no son los droides que está buscando",
    });
  };

  const handlerCurrentCategory = (event) =>
    setCurrentCategory(event.target.value);

  //Effects
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setCategories(Object.keys(response.data)))
      .catch(function (error) {
        setError({ state: false, message: "No data" });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form>
      <label htmlFor="categories"> Search for: </label>
      <select
        name="categories"
        id="categories"
        onChange={handlerCurrentCategory}
      >
        {categories.map((category, indx) => (
          <option key={`category${indx}`} value={category}>
            {category}
          </option>
        ))}
      </select>
      <label htmlFor="inputId">id: </label>
      <input
        type="number"
        name="inputId"
        id="inputId"
        placeholder="1"
        value={id}
        onChange={handlerId}
      />
      <input
        type="button"
        value="Search"
        onClick={handlerSearch(`${currentCategory}/${id ? id : "l"}`)} //it's necessary for firefox input number
      />
    </form>
  );
};
export default FrmApiWalker;
