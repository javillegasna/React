import  { useState } from "react";

function FrmList({ inProgressList, setInProgressList }) {
  //crear estado que controla el input de actividad
  const [activity, setAtivity] = useState("");
  //si existe un cambio en el input del formulario lo actualizamos
  const activityHandler = (e) => setAtivity(e.target.value);
  //Devuelve true si una actividad ya esta ingresada
  const findReapeat = inProgressList.reduce(
    (acc, inProgressItem) => acc || inProgressItem === activity,
    false
  );
  //agregamos una actividad pecionando enter o cliqueando el boton +  
  const addNewActivity = (e) => {
    e.preventDefault();
    setInProgressList(
      activity !== "" && !findReapeat //comprobamos si la actividad esta vacía y además verificamos si antes ya ha sido ingresada
        ? [...inProgressList, activity]
        : inProgressList
    );
    setAtivity("");
  };

  

  return (
    <form className="input-group" onSubmit={addNewActivity}>
      <input 
        className="form-control"
        type="text"
        name="inputActivity"
        value={activity}
        onChange={activityHandler}
        placeholder="Activity to do"
      />
      <input className="input-group-text" type="button" value="+" onClick={addNewActivity} />
    </form>
  );
}

export default FrmList;
