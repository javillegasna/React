import React, {Component} from "react";
class PersonCard extends Component{
    render(){
        const {name, lastName, age, hairColor}=this.props
        return(
            <section className="PersonCard">
                <h1 className="PersonCard__Title"> {name}, {lastName} </h1>
                <p><span>Age:</span>{age}</p>
                <p><span>Hair Color:</span>{hairColor}</p>
            </section>
        )
    };
}
export default PersonCard;