import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App() {
  
  let person = {
     username : "Anushka",
     post:"SW Engineer"
  }

  return (
    <>
      <h1 className='p-2 bg-green-600 text-3xl rounded'>Vite with Tailwind CSS</h1>
      <Card person={person} />
      {/* <Card post="Staff Engineer" /> */}


    </>
  )
}

export default App;