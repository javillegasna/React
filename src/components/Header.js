import personalLogo from "../assets/personal-Logol.png";
import Nav from "./Nav";
function Header(){
    return(
        <header>
            <picture className="pict-logo">
                <a href="/"><img className="pict-logo__img" src={personalLogo} title="Home" alt="Personal logo it's a J whit diferent colors into themself"/></a>
            </picture>
            <Nav/>
        </header>
    )
}
export default Header;