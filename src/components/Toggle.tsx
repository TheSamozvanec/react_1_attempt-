import type { IStateTema } from "./Interfases"
import "./styles/Toggle.css"
//import { useState } from "react"

function Toggle({tema,setTema}:IStateTema){
    
    return (
        <>
        <button className={tema} onClick={()=>setTema(tema? '':'dark')}>
            <span className="on">on </span><br/>
            <span className="off">off</span>
         </button>
         </>
    )
}

export default Toggle