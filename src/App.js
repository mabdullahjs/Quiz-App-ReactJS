import React, { useState } from 'react'

//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

//React Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import Navbar from './pages/navbar'
import Question from './pages/question'
import Quiz from './pages/quiz';

function App() {
  // all ques state
  let [quesArr, setQuesArr] = useState();

  //all ques function
  const questionArr = (e) => {
    setQuesArr(e);
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Question func={questionArr} />} />
        <Route exact path="/quiz" element={<Quiz question={quesArr}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App