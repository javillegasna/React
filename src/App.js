import { BrowserRouter, Route, Routes } from "react-router-dom";
import BoxPage from "./pages/BoxPage";
import DescriptionPage from "./pages/DescriptionPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/" element={<DescriptionPage/>}/>
        <Route path="/:value/*"element={<BoxPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
