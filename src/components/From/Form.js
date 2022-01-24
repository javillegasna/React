import { useContext } from "react";
import NavBarContext from "../context/NavBar/NavBarContext";

const Form = () => {
    const {user,setUser}=useContext(NavBarContext);
    const nameHandler = (e)=>setUser(e.target.value)
    return ( 
        <fieldset className="fs-3">
            <label className="me-2" htmlFor="Name"> Your Name:</label>
            <input className="text-secondary p-2"  Style="background-color: #efefef; border:none; border-radius:5px;"type="text" name="Name" id="Name" value={user} onChange={nameHandler} />
        </fieldset>
     );
}
 
export default Form;