import styled from "styled-components";
import Box from "./Box";

const StiledBoxContainer=styled.section`
    display: flex;
`;

function BoxContainer({listOfProps}) {
    console.log(listOfProps)
    return ( 
        <StiledBoxContainer className="container border">
            {listOfProps.map((prop,index)=> <Box key={`box${index}`} color={prop.color} width={prop.width} height={prop.height}></Box>)}
        </StiledBoxContainer>
     );
}

export default BoxContainer;