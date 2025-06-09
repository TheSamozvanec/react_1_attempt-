//import { useState } from 'react'
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
  
  return (
    <>
    <PageHeader/>
    <div className='content'>
      <PageMain/>
      <PageAside/>
    </div>
    <PageFooter/>
    </>
  )
}

export default App