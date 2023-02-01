import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

function Question() {

    // form state
    let [question , setQuestion] = useState("");
    let [option01 , setOption01] = useState("");
    let [option02 , setOption02] = useState("");
    let [option03 , setOption03] = useState("");
    let [answer , setAnswer] = useState("");

    function mainQues(e){
        setQuestion(e.target.value);
        console.log(e.target.value)
    }
    function optionone(e){
        option01(e.target.value);
        console.log(e.target.value)
    }
    function optiontwo(e){
        option02(e.target.value);
        console.log(e.target.value)
    }
    function optionthree(e){
        option03(e.target.value);
        console.log(e.target.value)
    }
    function corAnswer(e){
        answer(e.target.value);
        console.log(e.target.value)
    }

  return (
    <Box className="container p-5">
        <TextField value={question} onChange={mainQues} sx={{width:"100%"}} id="outlined-basic" label="Question" variant="outlined" />
        <Box className='pt-3'>
        <TextField value={option01} onChange={optionone} sx={{width:"30%"}}  id="filled-basic" label="Option-01" variant="filled" /><br />
        </Box>
        <Box className='pt-3'>
        <TextField value={option02} onChange={optiontwo} sx={{width:"30%"}} id="filled-basic" label="Option-02" variant="filled" /><br />
        </Box>
        <Box className='pt-3'>
        <TextField value={option03} onChange={optionthree} sx={{width:"30%"}} id="filled-basic" label="Option-03" variant="filled" /><br />
        </Box>
        <Box className='pt-3'>
        <TextField value={answer} onChange={corAnswer} sx={{width:"100%"}} id="outlined-basic" label="Correct Answer" variant="outlined" />
        </Box>
        <Box className="pt-5 d-flex justify-content-center">
        <Button variant="outlined">Submit</Button>
        </Box>

    </Box>
  )
}

export default Question