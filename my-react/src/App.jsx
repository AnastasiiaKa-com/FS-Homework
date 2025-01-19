import { useState } from 'react'
import './App.css'
import Homework01 from './homeworks01/Homework01'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <Homework01/>
      
    </>
  );
}

export default App;
