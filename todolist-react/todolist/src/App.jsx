import React from 'react'
import './App.css'
import { List } from './components/list'
import { Tittle } from './components/tittle'

function App() {

  return (
    <div className='to-fo-list-container font-mono'>
      <header>
        <Tittle/>
      </header>
      <List />
      <footer>
        <h5>CREATED BY: JORGE DANIEL SANABRIA SOTO</h5>
        <h5>PHONE: +57 312 6898866</h5>
      </footer>
    </div>
  )
}

export default App
