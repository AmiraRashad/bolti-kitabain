import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import {FaRegUser} from "react-icons/fa"
const useStyles = makeStyles((theme)=>({
    container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height :"600px",
    },
    child:{
        width:"60%",
    },
    button:{
        marginTop:"50px"
    }
}));              
const Signup = () => {
    const classes = useStyles();
    const [email] = React.useState("");
    const [password] = React.useState("");
    const [name] = React.useState("");
    return ( <div className={classes.container}>
        <div className={classes.child}>
        <FaRegUser size="5rem" style={{marginLeft:"350px"}}/>
        <h1 className="text-center">Register</h1>
        <TextField style={{}} label="name" fullWidth value={name} onChange={e=>{
            
        }}/><br/>
        <TextField style={{}} label="email"fullWidth value ={email} onChange={e=>{
            
        }}/><br/>
        <TextField style={{}} label="password" type="password"fullWidth value={password} onChange={e=>{
           
        }}/><br/>
        <Button variant="contained" color="primary" style={{marginTop:"50px"}}className={classes.button} onClick={e=>{
        }}>Register</Button>
        <a href="/Signin" style={{marginLeft:"180px",color:"purple"}}>Already have an account ? Sign In</a>
        </div>
        
    </div> );
}
 
export default Signup;