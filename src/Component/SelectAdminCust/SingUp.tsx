import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent } from 'react'
import FormControl from '@mui/material/FormControl';
import {FormData} from '../../dataTypes'
import { useNavigate } from 'react-router-dom';
// import { Formik } from 'formik';
// import { formValidation } from '../../validation';

const SingUp = () => {
  const [formData, setFormData] = React.useState<FormData[]>([]);
  const navTo=useNavigate()
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData,[event.target.name]:event.target.value});
  };

  const handleChange1=(event: SyntheticEvent<Element, Event>)=>{
    setFormData({...formData,[event.target.name]:event.target.checked})
    alert('checked')
  }
 
  return (
    <Box className='main-sign-up'>
      <Typography variant='h5' mb={2} color={'red'}>Sign Up User</Typography>
      
      <FormControl fullWidth className='sub-sign-up'>
      {/* <Formik
        initialValues={}
        validationSchema={()=>formValidation(formData.password||'')}
        onSubmit={handleSubmit}
      > */}
        <TextField
          label="Enter Name"
          variant="outlined"
          size="small"
          name='name'
          onChange={handleChange}
        />
        <TextField
          label="Enter Email"
          variant="outlined"
          size="small"
          name='email'
          type='email'
          onChange={handleChange}
        />
        <TextField
          
          label="Enter Number"
          variant="outlined"
          size="small"
          type='tel'
          name='number'
          
          onChange={handleChange}
        />
        <TextField
        
          label="Enter Username"
          variant="outlined"
          size="small"
          name='username'
          onChange={handleChange}
        />
        <TextField
         
          label="Enter Password"
          variant="outlined"
          size="small"
          type='password'
          name='password'
          onChange={handleChange}
        />
        <TextField
    
          label="Confirm Password"
          variant="outlined"
          size="small"
          type='password'
          name='confirmPassword'
          onChange={handleChange}
        />
        <FormControlLabel required  control={<Checkbox />}  label="Required" onChange={handleChange1} name='check'/>
        <Box sx={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
        <Button variant="contained">Sign Up</Button>
        <Button variant="outlined" onClick={()=>navTo('/login')}>Sign In</Button>
        </Box>
        {/* </Formik> */}
      </FormControl>
     
    </Box>
  )
}

export default SingUp
