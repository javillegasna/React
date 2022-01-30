import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import NotFound from "../components/NotFound";
import getData from "../utilities/utilities";
const AvatarPage = () => {
  const customMessage = "Estos no son los droides que está buscando";
  const { id } = useParams();
  const [dataAvatar, setDataAvatar] = useState({});
  const [World, setWorld] = useState("");
  const [error, setError] = useState({ state: true, message: "" });
  useEffect(() => {
    const firstRender = async () => {
      const data = await getData({
        query: "people/" + id,
        setState: setDataAvatar,
        customMessage,
        setError,
      });
      await axios
        .get(data.homeworld)
        .then((response) => setWorld(response.data.name))
        .catch(function (error) {
          setError({ state: false, message: customMessage });
        });
    };
    firstRender();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {error.state && <p className="container card-header fs-1 text-primary">World: {World}</p>}
      {error.state && <Card cardData={dataAvatar} />}
      {!error.state && <NotFound setError={setError} error={error} />}
    </>
  );
};

export default AvatarPage;
