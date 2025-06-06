//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import UsersMap from './components/UsersMap';
interface User {
  id:string;
  name:string;
  age:number;
  email:string
}
export interface IUsers {
  users:User[]
}
const users:User[]=[
  { 
    id:'Oa_25_olya_mbllo',
    name:'Olya',
    age:25,
    email:'olya777@mbllo.net'
  },
  { 
    id:'Va_30_vasan_mblla_net',
    name:'Vasya',
    age:30,
    email:'vasan@mblla_net.ru'
  },
  { 
    id:'Nj_36_nikola555_neyandex',
    name:'Nikolaj',
    age:36,
    email:'nikola555@neyandex.com'
  },
  { 
    id:'Ir_32_nifigasebe_rabler',
    name:'Igor',
    age:40,
    email:'igogor13@mailllo.kz'
  },
]
function App() {
  

  return (
    <>
      <UsersMap  users={users}/>
    </>
  )
}

export default App
