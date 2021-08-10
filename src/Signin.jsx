import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import {FaRegUserCircle} from "react-icons/fa";

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
const Signin = () => {
    const classes = useStyles(); 
    const [email] = React.useState("");
    const [password] = React.useState("");
    return( <div className={classes.container}>
        <div className={classes.child}>
        <FaRegUserCircle size="5rem" style={{marginLeft:"360px"}}/>
        <h1 className="text-center">Login</h1>
        <TextField style={{}} label="Email" fullWidth value={email} onChange={(e)=>{
            
        }}/><br/>
        <TextField style={{}} label="Password" type="password" fullWidth value={password} onChange={(e)=>{
         
        }}/><br/>
        <a href="/Signup" style={{color:"purple",marginLeft:"300px"}}>Don't have an account? Sign Up</a>
        <Button variant="contained" color="primary" style ={{marginLeft:"360px",marginBottom:"30px"}}
        >Login </Button>
        
        </div>
        </div>
        );
        

}
export default Signin;