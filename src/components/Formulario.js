import { useState } from "react/cjs/react.development";
function Formulario({listColors, setListColors}) {
    const [inputState,setInputState]= useState("");
    const colorHandler = (color)=>{
        setInputState(color)
    };
    const createBox = (color)=>{
        setListColors([...listColors, color]);
    }
    return ( 
        <form className="container input-group mt-3 mb-3" action="">
            <label className="input-group-text" htmlFor="inputColor">Color: </label>
            <input type="text" className="form-control" placeholder="Color" name="inputColor" id="inputColor" onChange={(e)=>colorHandler(e.target.value)}  value={inputState} />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={()=>createBox(inputState)} >Button</button>
        </form>
     );
}

export default Formulario;