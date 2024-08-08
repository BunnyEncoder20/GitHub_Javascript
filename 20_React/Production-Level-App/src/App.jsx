import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {
  const nav = useNavigate();
  return (
    <>
      <h1>Welcome to Simple Login</h1>
      <h2>App.jsx</h2>
      <br />
      <br />
      <button onClick={() => nav('/login')}>Login</button>
    </>
  );
}

export default App
