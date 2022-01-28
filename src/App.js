import { useState } from "react";
import Card from "./components/Card";
import FrmApiWalker from "./components/FrmApiWalker";
import NotFound from "./components/NotFound";

function App() {
  const [cardData, setCardData] = useState({});
  const [error, setError] = useState({state:true,message:""});
  return (
   <main className="App">
      <FrmApiWalker setCardData={setCardData} setError={setError}/>
      {error.state&&<Card cardData={cardData}/>}
      {!error.state&& <NotFound setError={setError} error={error}/>}
    </main>
  );
}

export default App;
