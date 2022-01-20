import styled from "styled-components";
const StyledBox=styled.div`
    background: ${props=>props.bgColor};
    width: 100px;
    height: 100px;
    margin: 5px;
`;
function Box({color}) {
    return ( 
        <StyledBox bgColor={color}>

        </StyledBox>
     );
}

export default Box;