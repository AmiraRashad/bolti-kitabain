import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, TextField } from '@material-ui/core';
import {FaRegUserCircle} from "react-icons/fa";

const useStyles = makeStyles((theme)=>({
   
    child:{
        width:"100%",
        marginLeft: "100%",
    },
    button:{
        marginTop:"50px",
        
    },
    text1: {
        marginTop: "5%",
        marginLeft: "10%",
      },
     
}));     
const Signin = () => {
    const classes = useStyles(); 
    const [email] = React.useState("");
    const [password] = React.useState("");
    return( 
        <div
      style={{
        backgroundImage: `url("images/si.jpg")`,
        flex: 1,
        backgroundSize: "65% 100%",
        resizeMode: "contain",
        backgroundRepeat: "no-repeat",
        justifyContent: "center",
        alignItems: "center",
      }}
      >
        <Grid
        container
        display= "flex"
        direction="row"
        height = "100%"
        justifyContent="center"
        alignItems="center"
      >
        <Grid className={classes.text1} item xs={4} md={3} >
        <div className={classes.child}>
        <FaRegUserCircle size="5rem" style={{marginLeft:"40%"}}/>
        <h1 >Login</h1>
        <TextField style={{}} label="Email" fullWidth value={email} onChange={(e)=>{
            
        }}/><br/><br></br>
        <TextField style={{}} label="Password" type="password" fullWidth value={password} onChange={(e)=>{
         
        }}/><br/> <br></br>
        <a href="/Signup" style={{color:"purple",marginLeft:"10px", marginTop:"90px"}}>Don't have an account? Sign Up</a>
        <Button variant="contained" color="primary" style ={{ width: "100%", marginTop:"30px",}}
        >Login </Button>

        </div>
        </Grid>
        </Grid>
         </div>
        );
        }
export default Signin;