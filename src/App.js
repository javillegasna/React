import { useState } from "react/cjs/react.development";
import BoxContainer from "./components/BoxContainer";
import Formulario from "./components/Formulario";
function App() {
  const [listColors, setListColors]= useState([])
  return (
    <main className="App">
      <Formulario listColors={listColors} setListColors={setListColors}/>
      <BoxContainer listColors={listColors}/>
    </main>
  );
}

export default App;
