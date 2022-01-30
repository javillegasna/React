import { Link } from "react-router-dom";
import errorImg from "../assets/error.jpg";
const NotFound = ({ error, setError }) => {
  return (
    <div className="card" style={{width:"500px",margin: "30px auto"}}>
      <img className="card-img-top" style={{width:"500px",height:"400px"}}  src={errorImg} alt="" />
      <div className="card-body">
      <h5 className="card-title">{error.message}</h5>
      <Link to={"/"} className="container btn btn-primary" onClick={() => setError({ state: true, message: "" })}>ok</Link>
      </div>
    </div>
  );
};
export default NotFound;
