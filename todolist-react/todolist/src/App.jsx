import React from 'react'
import './App.css'
import { List } from './components/list'

function App() {

  return (
    <div className=''>
      <header>
      <h2>TODO LIST</h2>
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
