import "./styles/PageMain.css"
import users from "./users"
import UsersMap from "./UsersMap"
function PageMain(){
    return (
         
            <main className="">
                <UsersMap users={users}/>
            </main>
    )
}
export default PageMain