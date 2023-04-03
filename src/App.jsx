import { useState } from 'react'
import Stories from './Stories'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1>Hello World</h1>
     <Stories/>
    </div>
  )
}

export default App
