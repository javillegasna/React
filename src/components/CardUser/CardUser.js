import React from "react";
import styles from "./CardUser.module.css"
const CardUser = (props) => {
    const {firstName, lastName,email,password,confirmPassword} = props.stateInputs;
    const hidePasword=pswd=>pswd.length>0?"password":"";
    return (  
        <div className={styles.card}>
            <h1 className={styles.card__title}>Your Form Data</h1>
            <p className={styles.card__text} ><span className={styles.card__content} >First Name</span><span className={styles.card__data} >{firstName}</span></p>
            <p className={styles.card__text} ><span className={styles.card__content} >Last Name</span><span className={styles.card__data} >{lastName}</span></p>
            <p className={styles.card__text} ><span className={styles.card__content} >Email</span><span className={styles.card__data} >{email}</span></p>
            <p className={styles.card__text} ><span className={styles.card__content} >Pasword</span><span className={styles.card__data} >{hidePasword(password)}</span></p>
            <p className={styles.card__text} ><span className={styles.card__content} >Confirm Password</span><span className={styles.card__data} >{hidePasword(confirmPassword)}</span></p>
        </div>
    );
}
 
export default CardUser;