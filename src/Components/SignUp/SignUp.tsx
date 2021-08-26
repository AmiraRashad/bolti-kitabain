import React from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
import { FaRegUserCircle } from 'react-icons/fa';
// import userService from '../../services/UserService';

import useStyles from './styles';

const Signup = () => {
	const classes = useStyles();
	const [email, SetEmail] = React.useState('');
	const [password, SetPassword] = React.useState('');
	const [confirmpassword, comPassword] = React.useState('');
	const [name, SetName] = React.useState('');
	const [dateofbirth, SetDOB] = React.useState('');
	//  const [occupation] = React.useState("");
	//  const [disabilty] = React.useState("");
	// const handleChange = ( value, name,date) => {
	//     console.log(value);
	//     var change = {};
	//     change[name] = date;
	//      this.setState(change);
	// };
	return (
		<div
			style={{
				backgroundImage: `url("images/su.jpg")`,
				flex: 1,
				backgroundSize: '65% 100%',
				resizeMode: 'contain',
				backgroundRepeat: 'no-repeat',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{/* <Grid
				container
				display="flex"
				direction="row"
				height="100%"
				justifyContent="center"
				alignItems="center"
			> */}
				<Grid className={classes.text1} item xs={4} md={3}>
					<div className={classes.child}>
						<FaRegUserCircle size="5rem" style={{ marginLeft: '40%' }} />
						<h1>Register</h1>
						<TextField
							style={{}}
							label="name"
							fullWidth
							value={name}
							onChange={(e) => {
								SetName(e.target.value);
							}}
						/>
						<br />
						<TextField
							style={{}}
							label="email"
							fullWidth
							value={email}
							onChange={(e) => {
								SetEmail(e.target.value);
							}}
						/>
						<br />
						<TextField
							style={{}}
							label="password"
							type="password"
							fullWidth
							value={password}
							onChange={(e) => {
								SetPassword(e.target.value);
							}}
						/>
						<br />
						<TextField
							style={{}}
							label="confirm password"
							type="password"
							fullWidth
							value={confirmpassword}
							onChange={(e) => {
								comPassword(e.target.value);
							}}
						/>
						<br />
						<br />
						<TextField
							style={{}}
							type="date"
							fullWidth
							value={dateofbirth}
							onChange={(e) => {
								SetDOB(e.target.value);
							}}
						/>
						<br />
						{/* <TextField style={{}} label="Occupation" type="dropdown"fullWidth value={dateofbirth} onChange={e=>{ */}
						{/* occupation(e.target.value); */}
						{/* }}/><br/> */}

						<Button
							variant="contained"
							color="primary"
							style={{ marginTop: '50px' }}
							className={classes.button}
							onClick={() => {}}
						>
							Register
						</Button>
						<a href="/Signin" style={{ marginLeft: '180px', color: 'purple' }}>
							Already have an account ? Sign In
						</a>
					</div>
				</Grid>
			{/* </Grid> */}
		</div>
	);
};

export default Signup;
