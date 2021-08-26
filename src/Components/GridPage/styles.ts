import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: 30,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	fontname: {
		fontFamily: 'Roboto',
	},
	fontname2: {
		fontFamily: 'Hk',
	},
	text1: {
		marginTop: 100,
		marginLeft: 50,
	},
	getstarted: {
		backgroundColor: '#3CBFD4',
		color: 'white',
		fontFamily: 'Hk',
		'&:hover': {
			backgroundColor: '#33a1b2',
		},
	},
	appbar: {
		backgroundColor: 'transparent',
	},
	maintoolbar: {
		marginLeft: 45,
	},
	toolbar: {
		color: 'black',
		'&:hover': {
			backgroundColor: 'white',
			color: '#33a1b2',
		},
	},
	powered:
	{
		color: 'black',
	},

	toolbar2: {
		color: 'black',
		'&:hover': {
			backgroundColor: '#85D7ED',
			color: 'white',
		},
	},
}));
export default useStyles;
