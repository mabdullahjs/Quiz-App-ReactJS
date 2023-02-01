import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Question() {
    //add question state

    const [allques, setAllQues] = useState([]);

    // form state
    const [question, setQuestion] = useState("");
    const [option01, setOption01] = useState("");
    const [option02, setOption02] = useState("");
    const [option03, setOption03] = useState("");
    const [answer, setAnswer] = useState("");

    //form value function

    function mainQues(e) {

        setQuestion(e.target.value);
    }
    function optionone(e) {
        setOption01(e.target.value);
    }
    function optiontwo(e) {
        setOption02(e.target.value);
    }
    function optionthree(e) {
        setOption03(e.target.value);
    }
    function corAnswer(e) {
        setAnswer(e.target.value);
    }

    //add question function
    function addQuestion() {
        // console.log(question);
        // console.log(option01);
        // console.log(option02);
        // console.log(option03);
        // console.log(answer);
        if (question.trim().length === 0 || option01.trim().length === 0 || option02.trim().length === 0 || option03.trim().length === 0 || answer.trim().length === 0) {
            Swal.fire(
                'Empty Form?',
                'Please Fill the form correctly',
                'question'
              )
        } else {

            allques.push({
                "question": question,
                "option01": option01,
                "option02": option02,
                "option03": option03,
                "correctAnswer": answer
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Questions has been saved',
                showConfirmButton: false,
                timer: 1500
              })
            console.log(allques);
            setOption01("");
            setOption02("");
            setOption03("");
            setQuestion("");
            setAnswer("");
        }

    }
    return (
        <Box className="container p-5">
            <TextField value={question} onChange={mainQues} sx={{ width: "100%" }} id="outlined-basic" label="Question" variant="outlined" />
            <Box className='pt-3'>
                <TextField value={option01} onChange={optionone} sx={{ width: "30%" }} id="filled-basic" label="Option-01" variant="filled" /><br />
            </Box>
            <Box className='pt-3'>
                <TextField value={option02} onChange={optiontwo} sx={{ width: "30%" }} id="filled-basic" label="Option-02" variant="filled" /><br />
            </Box>
            <Box className='pt-3'>
                <TextField value={option03} onChange={optionthree} sx={{ width: "30%" }} id="filled-basic" label="Option-03" variant="filled" /><br />
            </Box>
            <Box className='pt-3'>
                <TextField value={answer} onChange={corAnswer} sx={{ width: "100%" }} id="outlined-basic" label="Correct Answer" variant="outlined" />
            </Box>
            <Box className="pt-5 d-flex justify-content-center">
                <Button variant="outlined" onClick={addQuestion}>Submit</Button>
            </Box>

        </Box>
    )
}

export default Question