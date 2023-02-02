import React, { useState } from 'react'

// import components
import { Button, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Box } from '@mui/system';

function Quiz({ question }) {
  let [index, setIndex] = useState(0);
  console.log(question);


  return (
    <Box className="p-5">
      {/* {question === undefined ? <h1>undefined</h1> : <Box>{question[index].question}</Box>} */}
      <Box>
        <Typography variant="h3" gutterBottom>
          what is html ?
        </Typography>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box className="pt-5">
        <Button variant="contained">Submit</Button>
      </Box>
    </Box>
  )
}

export default Quiz