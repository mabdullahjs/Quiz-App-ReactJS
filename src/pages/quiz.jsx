import React, { useState } from 'react'

// import components
import { Button, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/system';

function Quiz({ question, func, marks }) {
  // all question state
  let [index, setIndex] = useState(0);

  // form validation state
  let [radio, setRadio] = useState("");

  // Marks State
  const [number, setNumber] = useState(0)
  // console.log(question);
  // console.log(radio);

  const changeQuestion = () => {
    setIndex(index + 1);
    // console.log(radio);
    if (radio === question[index].correctAnswer) {
      // setNumber(number + 10)
      func(number + 10);
    } else {
      setNumber(number)
    }
  }
  return (
    <Box className="p-5">
      {question === undefined ? <Typography variant="h3">No Question Available</Typography> : index < question.length ? <Box>
        <Box>
          <Typography variant="h3" gutterBottom>
            {question[index].question}
            {/* {index < question.length ? question[index].question : <p>hello</p>} */}
          </Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel onChange={(e) => setRadio(e.target.value)} value={question[index].option01} control={<Radio />} label={question[index].option01} />
              <FormControlLabel onChange={(e) => setRadio(e.target.value)} value={question[index].option02} control={<Radio />} label={question[index].option02} />
              <FormControlLabel onChange={(e) => setRadio(e.target.value)} value={question[index].option03} control={<Radio />} label={question[index].option03} />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box className="pt-5">
          <Button variant="contained" onClick={() => changeQuestion()}>Submit</Button>
        </Box>
      </Box> : <Box>
        <Typography className='text-center' variant='h2'> Your Result</Typography>
        <Typography className='text-center pt-5' variant="h4">{marks} / {question.length * 10}</Typography>
        <Typography className='text-center pt-5' variant="h4">{(marks / question.length * 10)*100 >50 ? "pass" : "fail"}</Typography>
        {question = []}
      </Box>}
    </Box>
  )
}

export default Quiz