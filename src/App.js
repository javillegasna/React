import NavBarState from "./components/context/NavBar/NavBarState";
import FromWrapper from "./components/From/FormWrapper";
import NavBarWrapper from "./components/NavBar/NavBarWrapper";

function App() {
  return (
    <NavBarState className="App">
      <NavBarWrapper/>
      <FromWrapper/>
    </NavBarState>
  );
}

export default App;
