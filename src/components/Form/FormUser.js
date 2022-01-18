import styles from "./FormUser.module.css"
const FormUser = (props) => {
    //Destructuring properties
    const { stateInputs, setStateInputs } = props;
    //Formating Inputs on form
    const inputsUser = [
        { idInput: "firstName", inputType: "text", labelText: "First Name" },
        { idInput: "lastName", inputType: "text", labelText: "Last Name" },
        { idInput: "email", inputType: "text", labelText: "Email" },
        { idInput: "password", inputType: "password", labelText: "Password" },
        { idInput: "confirmPassword", inputType: "password", labelText: "Confirm Password" },
    ];
    //create onChange event
    const onChange = e => {setStateInputs({...stateInputs,[e.target.name]:e.target.value});
    console.log({...stateInputs,[e.target.name]:e.target.value})
    }
    //create dinamic inputs
    const createInput = (data, index) => {
        const {idInput,inputType,labelText} = data;
        return (
            <div key={`inputUser${index}`} className={styles.group}>
                <label className={styles.group__label} htmlFor={idInput}>{labelText}</label>
                <input className={styles.group__input} onChange={onChange} type={inputType} name={idInput} />
            </div>
        )
    }
    //return the complete component
    return (
        <form action="">
            {inputsUser.map((inputUser,index)=>createInput(inputUser,index))}
        </form>
    )
}
export default FormUser;