import styled from "styled-components";
import { useParams } from "react-router-dom";

//Styles
const Box = styled.div`
  padding: 10px;
  text-align: Center;
  color: ${(props) => (props.custom !== "" ? props.custom[0] : "#000")};
  background-color: ${(props) =>
    props.custom === "" || props.custom.length < 2 ? "#fff" : props.custom[1]};
`;
//Component
const BoxPage = () => {
  //Params from url
  const { var: value, "*": styles } = useParams();
  //On multiple params all others params are an string
  const getStyle = (str) => (str !== "" ? str.split("/") : "");

  return (
    <Box custom={getStyle(styles)}>
      {isNaN(value) ? `The Word is: ${value}` : `The Number is: ${value}`}
    </Box>
  );
};
export default BoxPage;
