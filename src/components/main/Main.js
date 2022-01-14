import style from "./Main.module.css"
import Subcontent from "../subcontent/Subcontent"
import Advertisement from "../advertisement/Advertisement";
function Main() {
    return(
        <main className={style.main}>
            <div className={style.container}>
                <Subcontent/>
                <Subcontent/>
                <Subcontent/>
            </div>
            <Advertisement/>
        </main>
    )
}
export default Main;