import { useState } from "react";
import styles from "./FormUser.module.css"

//Formating Inputs on form
const inputsUser = [
    { idInput: "firstName", inputType: "text", labelText: "First Name", errorMessage:"First Name must be at least 2 characters" },
    { idInput: "lastName", inputType: "text", labelText: "Last Name", errorMessage:"Last Name must be at least 2 characters" },
    { idInput: "email", inputType: "text", labelText: "Email", errorMessage:"Email must be at least 5 characters"},
    { idInput: "password", inputType: "password", labelText: "Password", errorMessage:"Password mustbe at least 8 characters" },
    { idInput: "confirmPassword", inputType: "password", labelText: "Confirm Password",errorMessage:"Passwords must match" },
];

const FormUser = (props) => {
    //Destructuring properties
    const { stateInputs, setStateInputs } = props;

    //Create valitation state false->no error, true ->error
    const [stateError,setStateError] = useState(inputsUser.reduce( (acc, inputUser) => ({...acc, [inputUser.idInput] : false }),{}));

    //create onChange event
    const onChange = e => {
        setStateInputs({...stateInputs,[e.target.name]:e.target.value});
        valInputs(e.target.name, e.target.value);
    };

    //Validate inputs
    const valInputs = (idInput, value) =>{
        switch (idInput) {
            case 'firstName':
                setStateError({...stateError,firstName: value.length<3 && value.length>0});
                break;
            case 'lastName':
                setStateError({...stateError,lastName: value.length<3 && value.length>0});
                break;
            case 'email':
                setStateError({...stateError,email: value.length<6 && value.length>0});
                break;
            case 'password':
                setStateError({...stateError,password: value.length<9 && value.length>0});
                break;
            case 'confirmPassword':
                setStateError({...stateError,confirmPassword: stateInputs.password!==value && value.length>0});
                break;
            default:
              console.log(`Sorry, we are out of ${idInput}.`);
          }
    };

    //create dinamic inputs
    const createInput = (data, index) => {
        const {idInput,inputType,labelText,errorMessage} = data;
        return (
            <>
                <div key={`inputUser${index}`} className={styles.group}>
                    <label className={styles.group__label} htmlFor={idInput}>{labelText}</label>
                    <input className={styles.group__input} onChange={onChange} type={inputType} name={idInput} />
                </div>
                {
                    stateError[idInput]? <p key={`errorFormUser${index}`} className={styles.group__error}> {errorMessage} </p> : ""
                }
            </>
        )
    };

    //return the complete component
    return (
        <form action="">
            {inputsUser.map((inputUser,index)=>createInput(inputUser,index))}
        </form>
    );
}

export default FormUser;