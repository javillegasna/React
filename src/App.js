import { useState } from "react/cjs/react.development";
import BoxContainer from "./components/BoxContainer";
import Formulario from "./components/Formulario";
function App() {
  const [listOfProps, setListOfProps]= useState([])
  return (
    <main className="App">
      <Formulario listOfProps={listOfProps} setListOfProps={setListOfProps}/>
      <BoxContainer listOfProps={listOfProps}/>
    </main>
  );
}

export default App;
