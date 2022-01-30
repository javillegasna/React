import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/HomePage";
import AvatarPage from "./pages/AvatarPage";
function App() {
  
  return (
   <Router>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/:id" element={<AvatarPage/>}/>
     </Routes>
   </Router>
  );
}

export default App;
