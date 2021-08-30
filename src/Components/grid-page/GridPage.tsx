import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import Popularbooks from '../popular-books/PopularBooks';
import '../../index.css';
import useStyles from './styles';

export default function GridPage() {
	const classes = useStyles();

	return (
		<div
			style={{
				backgroundImage: `url("images/landingpage.jpg")`,
				flex: 1,
				backgroundSize: '100% auto',
				resizeMode: 'contain',
				backgroundAttachment: 'cover',
				backgroundRepeat: 'no-repeat',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			className={classes.root}
		>
			<Grid container>
				<Grid className={classes.text1} item xs={12} md={6}>
					<Typography variant="h2" className={classes.fontname}>
						بولتی کتابیں
						<br />
					</Typography>
					<Typography
						style={{ marginTop: 22, fontSize: 22 }}
						paragraph
						component="div"
						className={classes.fontname2}
					>
						Experience the Best Audio Listening Platform With <br /> &quot;BOLTI
						KITAABAIN&quot; and Enjoy Listening to Your <br /> Favorite Books,
						&quot;Anywhere Anytime&quot;.
					</Typography>
					<Typography
						style={{ fontSize: 18 }}
						paragraph
						component="div"
						className={classes.powered}
					>
						<i>Powered by PITB</i>
					</Typography>
					<Button className={classes.getstarted} variant="contained">
						Get Started
					</Button>
				</Grid>
			</Grid>

			<Popularbooks />
		</div>
	);
}
