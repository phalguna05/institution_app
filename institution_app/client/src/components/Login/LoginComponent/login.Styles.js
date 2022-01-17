/* eslint-disable quotes */
import { makeStyles } from '@material-ui/core';

const divStyles = makeStyles({
	mainContainer: {
		marginInline: 'auto',
		marginTop: '10%',
		width: '30%',
		padding: '10px',
	},
	formContainer: {
		display: 'flex',
		flexDirection: 'column',
		padding: '40px',
		minHeight: '270px',
		justifyContent: 'space-between',
		textAlign: 'center',
	},
	errorContainer: {
		// opacity: '0.4',
		backgroundColor: '#ffa3a3',
		height: '30px',
		border: '2px solid red',
		borderRadius: '4px',
		color: 'red',
	},
});

export { divStyles };
