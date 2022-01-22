import { useState, useEffect } from "react";
import styled from "styled-components";
//Estilos

const StyledItem = styled.li`
  margin: 10px 0px;
  list-style: none;
  & .check {
    width: 38px;
    background: #e9ecef;
    border: 1px solid #ced4da;
  }
  & .form-control {
    text-decoration: ${(props) =>
      props.complete ? "line-through rgb(34, 48, 78)" : "none"};
  }
  & .input-group-text {
    visibility: ${(props) => (props.complete ? "hidden" : "visible")};
  }
`;

//componente
function ItemToDo({ name, description }) {
  //obtener estado inicial del checkbox del local storage
  const data = localStorage.getItem(name)
  const getLocalData = !!data? JSON.parse(data) : false;

  //crear estado del componente
  const [complete, setComplete] = useState(false);

  //actualizar el estado con datos de localstorage
  useEffect(() => {
    const data = localStorage.getItem(name);
    setComplete(data ? JSON.parse(data) : false);
  }, [name]);

  //Intercambiar estado y guardarlo en local
  const togglestate = (e) => {
    setComplete(!complete);
    localStorage.setItem(name, JSON.stringify(!complete));
  };
  return (
    <StyledItem className="input-group" complete={complete}>
      <label className="form-control" htmlFor={name}>
        {description}
      </label>

      <input
        className="check"
        defaultChecked={getLocalData}
        type="checkbox"
        name={name}
        id={name}
        onClick={togglestate}
      />

      <input
        className="input-group-text"
        type="button"
        name={description}
        value="-"
      />
    </StyledItem>
  );
}

export default ItemToDo;
