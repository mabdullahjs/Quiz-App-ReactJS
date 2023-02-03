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
  let [marks, totalMarks] = useState(0)

  //all ques function
  const questionArr = (e) => {
    setQuesArr(e);
  }

  // quiz function
  const quiz = (e) => {
    totalMarks(marks + e);
    console.log(e);
  }
  console.log(quesArr);
  return (
    <BrowserRouter>
      <Navbar marks={marks} total={quesArr === undefined ? 0 : quesArr.length} />
      <Routes>
        <Route exact path="/" element={<Question func={questionArr} />} />
        <Route exact path="/quiz" element={<Quiz question={quesArr} func={quiz} marks={marks} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App