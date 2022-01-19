//error = false => error doesn't exist 
const initialState = () =>({
    firstName: {
        value: '',
        error: false
    },
    lastName: {
        value: '',
        error: false
    },
    email: {
        value: '',
        error: false
    }
});
const exp ={
    firstName:/^[a-zA-ZÀ-ÿ]{4,16}$/,
    lastName:/^[a-zA-ZÀ-ÿ]{4,16}$/,
    email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
const validator = (state =initialState(),action={})=>{
    
    let {firstName, lastName , email} = state;
    const {type, value}=action;
    if(type==="firstName"){
        firstName.value=value;
        firstName.error = !(exp.firstName.test(value)|| value==="");
        return {firstName,lastName,email}
    }
    else if(type==="lastName"){
        lastName.value=value;
        lastName.error = !(exp.lastName.test(value)|| value==="");
        return {firstName,lastName,email}
    }
    else if(type==="email"){
        email.value=value;
        email.error = !(exp.email.test(value)|| value==="");
        return {firstName,lastName,email}
    }
    else{
        return {...state}
    }
}
export default validator;