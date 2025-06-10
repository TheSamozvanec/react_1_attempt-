//import { useState } from "react";
//const test=useState('text');
export interface IStateTema{
  tema:string,
  setTema:React.Dispatch<React.SetStateAction<string>>
}
export interface User {
  id:string;
  name:string;
  age:number;
  email:string
}
export interface IUsers {
  users:User[]
}