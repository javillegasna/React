import FormUser from "../Form/FormUser";
import CardUser from "../CardUser/CardUser";
import styles from "./App.module.css"
import { useState } from "react";
function App() {
  const userData = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  }
  const [state, setState] = useState(userData);
  return (
    <main className={styles.app}>
      <FormUser stateInputs={state} setStateInputs={setState}/>
      <CardUser stateInputs={state}/>
    </main>
  );
}

export default App;
