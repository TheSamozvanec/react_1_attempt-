import type { IStateTema } from "./Interfases"
import "./styles/PageMain.css"
import users from "./users"
import UsersMap from "./UsersMap"
function PageMain({tema}:IStateTema){
    return (
         
            <main className={tema}>
                <UsersMap users={users}/>
            </main>
    )
}
export default PageMain