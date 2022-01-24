import { useContext } from "react";
import NavBarContext from "../context/NavBar/NavBarContext";

const NavBar = () => {
    const {user}=useContext(NavBarContext)
    return ( 
        <>
            <span className="fs-1 text-light">
                Hi {user?user:"user"}!
            </span>
        </>
     );
}
 
export default NavBar;