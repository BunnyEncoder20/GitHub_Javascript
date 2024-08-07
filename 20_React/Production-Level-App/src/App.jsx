import './App.css'
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios'

function App() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [user, setUser] = useState();
  const dispatch = useDispatch()

  useEffect(() => {
    ; (async () => {
      try {
        setLoading(true);
        setErr(false);

        // const res = await axios.get('https://api.freeapi.app/api/v1/public/randomusers/12');
        const res = await axios.get('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=5')

        console.log(res);
        // setUser(res)
      }
      catch (error) {
        console.error("There was an error : ", error);
        setErr(true);
      }
      finally {
        setLoading(false);
      }
    })()
  }, [setLoading])


  // Conditional rednering of Component 
  return loading ? (
    <>
      <h1>Loading. Please Wait...</h1>
    </>
  ) : (
    <>
      <h1>Simple Login Practice</h1>

      <br />

      {/* <h2>You are logged in now !</h2> */}

      <br />

      <h3>User Info : </h3>

      <br />

      {}
    </>
  )
}

export default App
