import styled from "styled-components";
const StyledBox=styled.div`
    background: ${props=>props.bgColor};
    width: ${props=>props.width!==""?props.width+"px":"100px"};
    height: ${props=>props.height!==""?props.height+"px":"100px"};
    margin: 5px;
`;
function Box({color, width, height}) {
    console.log(color,width,height)
    return ( 
        <StyledBox bgColor={color} width={width} height={height}>

        </StyledBox>
     );
}

export default Box;