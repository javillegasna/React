import styled from "styled-components";
import Box from "./Box";

const StiledBoxContainer=styled.section`
    display: flex;
`;

function BoxContainer({listColors}) {
    return ( 
        <StiledBoxContainer className="container border">
            {listColors.map((el,index)=> <Box key={`box${index}`} color={el} ></Box>)}
        </StiledBoxContainer>
     );
}

export default BoxContainer;