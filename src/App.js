import { useState } from "react";
import Card from "./components/Card";
import FrmApiWalker from "./components/FrmApiWalker";

function App() {
  const [cardData, setCardData] = useState({});
  return (
   <main className="App">
      <FrmApiWalker setCardData={setCardData}/>
      <Card cardData={cardData}/>
    </main>
  );
}

export default App;
