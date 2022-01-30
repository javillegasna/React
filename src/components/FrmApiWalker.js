import { useEffect, useState } from "react";
import getData from "../utilities/utilities";
import axios from "axios";
const API_URL = "https://swapi.dev/api/";
const FrmApiWalker = ({ setCardData, setError }) => {
  //Operative const
  //States of component
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("people");
  const [id, setId] = useState("1");

  //Utilities
  const renderCategories = () =>
    categories.map((category, indx) => (
      <option key={`category${indx}`} value={category}>
        {category}
      </option>
    ));
  //Handlers
  const handlerId = (event) => {
    const { value } = event.target;
    setId(value);
  };
  const handlerSearch = (query) => (event) => {
    event.preventDefault()
    console.log(query)
    getData({
      query,
      setState: setCardData,
      customMessage: "Estos no son los droides que está buscando",
      setError,
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
  }, [])

  return (
    <form className="container-sm mt-2" onSubmit={handlerSearch(`${currentCategory}/${id ? id : "l"}/`)}>

      <div className="row mb-2">
        <fieldset className="col">
          <label className="form-label" htmlFor="categories">
            Search for:
          </label>
          <select
            className="form-select"
            name="categories"
            id="categories"
            onChange={handlerCurrentCategory}
          >
            {renderCategories()}
          </select>
        </fieldset>

        <fieldset className="col">
          <label className="form-label" htmlFor="inputId">
            id:
          </label>
          <input
            className="form-control"
            type="number"
            name="inputId"
            id="inputId"
            placeholder="1"
            value={id}
            onChange={handlerId}
          />
        </fieldset>
      </div>

      <input
        className="container btn btn-primary"
        type="button"
        value="Search"
        onClick={handlerSearch(`${currentCategory}/${id ? id : "l"}/`)} //it's necessary for firefox input number
      />
    </form>
  );
};
export default FrmApiWalker;
