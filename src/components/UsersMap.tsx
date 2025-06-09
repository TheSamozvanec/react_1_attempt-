//import React from "react";
import type { IUsers } from "./Interfases"

const UsersMap = ({users}:IUsers)=>{
    return (
        <>
            {users.map((user:{id:string,name:string,age:number,email:string})=>(
                <div key={user.id}>
                    <p>name: {user.name}</p>
                    <p>age: {user.age}</p>
                    <p>email: {user.email}</p>
                </div>
    ))}  
        </>
    )
}
export default UsersMap