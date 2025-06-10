import { useState } from "react"

function UseTema(){
    const [tema,setTema] = useState('dark');
    return {tema,setTema}
}
const Tema=UseTema();
export default Tema