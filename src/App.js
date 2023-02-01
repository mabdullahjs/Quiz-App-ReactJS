import React from 'react'

//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Navbar from './pages/navbar'
import Question from './pages/question'

function App() {
  return (
    <div>
      <Navbar/>
      <Question/>
    </div>
  )
}

export default App