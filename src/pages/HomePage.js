import { useState } from "react";
import Card from "../components/Card";
import FrmApiWalker from "../components/FrmApiWalker";
import NotFound from "../components/NotFound";
const Home = () => {
  const [cardData, setCardData] = useState({});
  const [error, setError] = useState({ state: true, message: "" });
  return (
    <div>
      <main className="App">
        <FrmApiWalker setCardData={setCardData} setError={setError} />
        {error.state && <Card cardData={cardData} />}
        {!error.state && <NotFound setError={setError} error={error} />}
      </main>
    </div>
  );
};

export default Home;
