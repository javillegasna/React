import icoFaceBook from "../assets/icon-face.png";
import icoGit from "../assets/icon-git.png";
import icoLinkedin from "../assets/icon-Link.png";
const links = [
    {idLink:"Github",url:"https://github.com/javillegasna", icon:icoGit},
    {idLink:"Linkedin",url:"https://www.linkedin.com/in/javiervillegasnaranjo", icon:icoLinkedin},
    {idLink:"Facebok",url:"https://www.facebook.com/javier.villegas.3760", icon:icoFaceBook}
];
function NavItem (){
    return(
        links.map(link=>(
            <a key={link.idLink} href={link.url} target="_blank" rel="noreferrer">
                <img className="nav__icon" src={link.icon} alt={`${link.idLink} icon whit link to personal ${link.idLink} profile`}/>
            </a>
        ))
    )
}
function Nav (){
    return(
        <nav className="nav">
            <NavItem/>
        </nav>
    )
}

export default Nav 