import type { IStateTema } from "./Interfases"
import "./styles/PageAside.css"

function PageAside({tema}:IStateTema){
    return (
        <aside className={tema}>
             <h1>Welcome!!!</h1>
            <p><a href="#">text text text 1</a></p>
            <p><a href="#">text text text 2</a></p>
            <p><a href="#">text text text 3</a></p>
            <p><a href="#">text text text 4</a></p>
            <p><a href="#">text text text 5</a></p>
            <p><a href="#">text text text 6</a></p>
        </aside>
    )
}

export default PageAside