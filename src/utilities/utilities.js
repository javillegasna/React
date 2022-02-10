import axios from "axios";
const API_URL = "https://swapi.dev/api/";
const getData = async ({
    query = "",
    setState,
    customMessage = "",
    setError=console.error,
  }) =>
    axios
      .get(API_URL + query)
      .then((response) => {setState(response.data);setError({ state: true, message: customMessage }); return response.data})
      .catch(function (error) {
        setError({ state: false, message: customMessage });
      });
export default getData