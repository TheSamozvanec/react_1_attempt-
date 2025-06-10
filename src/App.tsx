import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import PageHeader from './components/PageHeader'
import PageMain from './components/PgaeMain'
import PageAside from './components/PgeAside'
import PageFooter from './components/PageFooter'
//import UsersMap from './components/UsersMap';
//import users from './components/users';

function App() {
  const Tema=useState('dark');
  const tema=Tema[0]
  const setTema=Tema[1]
  return (
    <>
    <PageHeader tema={tema} setTema={setTema}/>
    <div className='content'>
      <PageMain tema={tema} setTema={setTema}/>
      <PageAside tema={tema} setTema={setTema}/>
    </div>
    <PageFooter/>
    </>
  )
}

export default App