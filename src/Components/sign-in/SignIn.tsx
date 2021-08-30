import React from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
import { FaRegUserCircle } from 'react-icons/fa';
import useStyles from './styles';

const SignIn = () => {
	const classes = useStyles();
	const [email] = React.useState('');
	const [password] = React.useState('');
	return (
		<div
			style={{
				backgroundImage: `url("images/si.jpg")`,
				flex: 1,
				backgroundSize: '65% 100%',
				resizeMode: 'contain',
				backgroundRepeat: 'no-repeat',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			 <Grid container
				 //display="flex"
				 direction="row"
				  //height="100%"
				 justifyContent="center"
				 // alignItems="center"
				> 
			
				<Grid className={classes.text1} item xs={4} md={3}>
					<div className={classes.child}>
						<FaRegUserCircle size="5rem" style={{ marginLeft: '40%' }} />
						<h1>Login</h1>
						<TextField
							style={{}}
							label="Email"
							fullWidth
							value={email}
							onChange={() => {}}
						/>
						<br />
						<br />
						<TextField
							style={{}}
							label="Password"
							type="password"
							fullWidth
							value={password}
							onChange={() => {}}
						/>
						<br /> <br />
						<a
							href="/Signup"
							style={{ color: 'purple', marginLeft: '10px', marginTop: '90px' }}
						>
							Don&apos;t have an account? Sign Up
						</a>
						<Button
							variant="contained"
							color="primary"
							style={{ width: '100%', marginTop: '30px' }}
						>
							Login{' '}
						</Button>
					</div>
				</Grid>
			 </Grid> 
		</div>
	);
};
export default SignIn;
