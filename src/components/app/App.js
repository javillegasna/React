import styles from "./App.module.css"
import Header from "../header/Header"
import Main from "../main/Main";
import Navigation from "../navigation/Navigation";
function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <div className={styles.content}>
        <Navigation/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
