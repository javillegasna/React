import React, {Component} from "react";
class PersonCard extends Component{
    state;
    constructor(props) {
        super(props);
        this.state = {
            age: props.person.age
        };
    };
    addAgeByOne=()=>{this.setState({age : this.state.age+1})};
    render(){
        const {name, lastName, hairColor}=this.props.person
        return(
            <section className="PersonCard">
                <h1 className="PersonCard__Title"> {name}, {lastName} </h1>
                <p><span>Age:</span>{ this.state.age }</p>
                <p><span>Hair Color:</span>{hairColor}</p>
                <button className="PersonCard__Button" onClick={this.addAgeByOne} > Birthday Button for {name} {lastName}</button>
            </section>
        )
    };
    
}
export default PersonCard;