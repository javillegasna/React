import errorImg from "../assets/error.jpg"
const NotFound = ({error,setError}) => {
    return ( <div>
        <img  src={errorImg} alt="" />
        <p>{error.message}</p>
        <button onClick={()=>setError({state:true,message:""})}>ok</button>
    </div> );
}
export default NotFound;