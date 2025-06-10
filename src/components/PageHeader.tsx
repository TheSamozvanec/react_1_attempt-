import type { IStateTema } from "./Interfases"
import "./styles/PageHeader.css"
import Toggle from "./Toggle"

function PageHeader({tema,setTema}:IStateTema){
    
    return (
         
            <header className={tema}>
                <Toggle tema={tema} setTema={setTema}/>
                <div className="use">Users</div>
                <div>Content</div>
                <div>Blogs</div>
                <div>Stories</div>
            </header>
    
    )
}
export default PageHeader