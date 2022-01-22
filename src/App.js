import React, { useState } from "react";
import FrmList from "./components/FrmList";
import ListToDo from "./components/ListToDo";

function App() {
  const [inProgressList, setInProgressList] = useState([]);
  //al crear el componente lo inicializamos con la data de local
  React.useEffect(() => {
    const data = localStorage.getItem("inprogressList");
    if (data) {
      setInProgressList(JSON.parse(data));
    }
  }, []);
  //al detectar un cambio guardamos los datos en local
  React.useEffect(() => {
    localStorage.setItem("inprogressList", JSON.stringify(inProgressList));
  });
 
  return (
    <main className="App">
      <h1 className="App__header"> Lista De Quehaceres </h1>
      <FrmList
        inProgressList={inProgressList}
        setInProgressList={setInProgressList}
      />
      <ListToDo
        inProgressList={inProgressList}
        setInProgressList={setInProgressList}
      />
    </main>
  );
}

export default App;
