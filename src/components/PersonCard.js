import React from "react";
const PersonCard = props =>{
    const {name, lastName, age, hairColor}=props.person;
    return(
        <section className="PersonCard">
            <h1 className="PersonCard__Title"> {name}, {lastName} </h1>
            <p><span>Age:</span>{age}</p>
            <p><span>Hair Color:</span>{hairColor}</p>
        </section>
    );
}
export default PersonCard;