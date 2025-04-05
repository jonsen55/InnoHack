import React, { createContext, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import "./App.css"
import { Outlet } from 'react-router'

export const ContextStore = createContext();

const App = () => {
  const [modal,setModal] = useState(false);
  return (
    <div className="<Navbar />">
      <Navbar />
    </div>
    
 
  )
}

export default App