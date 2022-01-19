import { useReducer } from "react";
import validator from "../hooks/valitionForms";
function FrmUser() {
    //use hook reducer with initialStare as default
    const [stateForm, dispForm] = useReducer(validator,validator())
    const {firstName,lastName,email}=stateForm;
    const borderCalss = trigger => trigger?"border-danger":"";
    return (
        <form className="container-sm p-3 " style={{width: "500px"}} action="">
            <div className="mb-3">
                <label className="form-label" htmlFor="firstName">First Name</label>
                <input className={`form-control ${borderCalss(firstName.error)}`} name="firstName" id="firstName" type="text" onChange={(e)=>dispForm({type:e.target.name,value:e.target.value})} value={firstName.value}/>
                {
                    firstName.error&&<p className="form-text text-danger" id="firstNameHelp"> Solo se aceptan letras y una longitud de entre 4 y 20 caracteres </p>
                }
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="lastName">Last Name</label>
                <input className={`form-control ${borderCalss(lastName.error)}`}  name="lastName" id="lastName" type="text" onChange={(e)=>dispForm({type:e.target.name,value:e.target.value})} value={lastName.value}/>
                {
                    lastName.error&&<p className="form-text text-danger" id="firstNameHelp"> Solo se aceptan letras y una longitud de entre 4 y 20 caracteres </p>
                }
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input className={`form-control ${borderCalss(email.error)}`} name="email" id="email" type="email" placeholder="user@example.com" onChange={(e)=>dispForm({type:e.target.name,value:e.target.value})} value={email.value}/>
                {
                    email.error&&<p className="form-text text-danger" id="firstNameHelp"> introduzca un email valido </p>
                }
            </div>
            <button type="button" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default FrmUser;