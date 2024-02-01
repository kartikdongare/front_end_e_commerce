import { Box, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { ChangeEvent, MouseEvent, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import {OnChangeTypes} from '../../dataTypes'


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {role}=useParams()
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [loginData,setLoginData]=useState({})
    
    const handleLoginData=(event: ChangeEvent<HTMLInputElement>)=>{
        setLoginData({...loginData,[event.target.name]:event.target.value})
    }
    console.log({...loginData,role},'loginData')
    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [checked, setChecked] = useState(true);

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <Box className="main-login">
            <Box className="sub-login">
             <Box  className="login-page2">
             </Box>
                <Box className="login-page1">
                    <Box>
                        <Typography variant="h5" fontWeight={"bold"}>
                            Admin Login
                        </Typography>
                        <Typography>
                            Doesn't have an account yet?
                            <Link to={'/sign-up'}><span style={{color:"blueviolet"}}>Sign Up</span></Link>
                            
                            {/* <Typography variant='span'>Sign Up</Typography> */}
                        </Typography>
                    </Box>
                    <TextField
                        id="outlined-basic"
                        label="Enter email"
                        variant="outlined"
                        size="small"
                        onChange={handleLoginData}
                        name="email"
                    />

                    <FormControl variant="outlined" size="small" >
                        <InputLabel htmlFor="outlined-adornment-password">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            onChange={handleLoginData}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Typography>
                        <Checkbox
                            checked={checked}
                            size="small"
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        Remember me
                    </Typography>
                    <Link to={'/home'} style={{textAlign:'center'}}><Button variant="contained" fullWidth>Login</Button></Link>
                    
                    <Box className='seperate'>
                        <Box className='sep-line'></Box>
                        <Typography>Log in With</Typography>
                        <Box className='sep-line'></Box>
                    </Box>
                    <Box className='buttons'>
                        <Button variant="outlined" color="error"><GoogleIcon />&nbsp;&nbsp;Google</Button>
                        <Button variant="outlined"><FacebookIcon />&nbsp;&nbsp;Facebook</Button>
                    </Box>
                </Box>
                
            </Box>
        </Box>
    );
};

export default Login;
