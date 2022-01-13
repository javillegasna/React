import PersonCard from "./PersonCard"
const persons =[
    {name:"Jane", lastName:"Doe", age:45, hairColor:"Black"},
    {name:"John", lastName:"Smith", age:88, hairColor:"Brown"},
    {name:"Millard", lastName:"Fillmore", age:50, hairColor:"Brown"},
    {name:"Maria", lastName:"Smith", age:62, hairColor:"Brown"}
];
function Main (){
    return <main> {persons.map((person,index)=> <PersonCard key={`personID${index}`} name={person.name} lastName={person.lastName} age={person.age} hairColor={person.hairColor} /> )} </main>  
}
export default Main;