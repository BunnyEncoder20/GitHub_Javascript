import './App.css'
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import axiso from 'axios'

function App() {
  const [loading, setLoading] = useState;
  const dispatch = useDispatch()
  
  useEffect(() => {
    
  }, [])
  

  return (
    <>
      <h1>Simple Login Practice</h1>
    </>
  )
}

export default App
