import { useState } from "react/cjs/react.development";
function Formulario({listOfProps, setListOfProps}) {
    //Creacion y comportamiento del estado Color
    const [colorState,setColorState]= useState("black");
    const colorHandler = (color)=>{
        setColorState(color)
    };
    
    //Creación y comportaminto del estado height
    const [heightState,setHeightState]= useState("");
    const heigthHandler = (height)=>{
        setHeightState(height);
    }

    //Creación y comportamiento del estado Width
    const [widthState,setWidthState]= useState("");
    const WidthHandler=(width)=>{
        setWidthState(width);
    };

    //Agregar propiedades de la caja
    const addBoxProps = ()=>{
        setListOfProps([...listOfProps,{color: colorState, width: widthState, height: heightState}]);
        setColorState("black");
        setHeightState("");
        setWidthState("");
    }

    return ( 
    <form className="container" action="">
        <fieldset className="input-group mt-3 mb-3">
            <legend>Color de fondo</legend>
            <label className="input-group-text" htmlFor="inputColor">Color: </label>
            <input type="color" className="form-control" placeholder="Color" name="inputColor" id="inputColor" onChange={(e)=>colorHandler(e.target.value)}  value={colorState}  style={{height: "50px"}}/>
        </fieldset>

        <fieldset className="input-group mt-3 mb-3">
            <legend>Dimensiones  </legend>

            <label className="input-group-text" htmlFor="inputHeigth">Heigth: </label>
            <input type="number" className="form-control" placeholder="100" name="inputHeigth" id="inputHeigth" onChange={(e)=>heigthHandler(e.target.value)}  value={heightState}  style={{height: "50px"}}/>
            
            <label className="input-group-text" htmlFor="inputWidth">Width: </label>
            <input type="number" className="form-control" placeholder="100" name="inputWidth" id="inputWidth" onChange={(e)=>WidthHandler(e.target.value)}  value={widthState}  style={{height: "50px"}}/>
        </fieldset>
        <button className=" container mb-3 btn btn-outline-secondary" type="button" id="button-addon2" onClick={()=>addBoxProps()} >Ingresar</button>
    </form>
     );
}

export default Formulario;