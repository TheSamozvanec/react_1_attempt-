import "./styles/PageHeader.css"
import Toggle from "./Toggle"
function PageHeader(){
    return (
         
            <header className=''>
                <Toggle/>
                <div className="use">Useers</div>
                <div>Content</div>
                <div>Blogs</div>
                <div>Stories</div>
            </header>
    
    )
}
export default PageHeader