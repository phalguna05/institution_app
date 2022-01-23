import { makeStyles } from '@material-ui/core';

const divStyles = makeStyles({
	mainContainer: {
		display: 'flex',
		width: '95%',
		marginLeft: '5%',
		'@media (max-width: 780px)': {
			flexDirection: 'column',
		},
	},
	leftContainer: {
		width: '60%',
		height: '80vh',
		display: 'inline',
		marginTop: '3vh',
		'@media (max-width: 780px)': {
			width: '100%',
			height: '100%',
		},
	},
	rightContainer: {
		width: '30%',
		height: '80vh',
		marginTop: '3vh',
		'@media (max-width: 780px)': {
			width: '90%',
		},
	},
	smallCard: {
		width: '28%',
		height: '28vh',
		marginRight: '3%',
		marginBottom: '40px',
		background: ' white',
		display: 'inline-block',
		boxShadow:
			' 0 5px 10px rgba(154, 160, 185, 0.05),0 15px 40px rgba(166, 173, 201, 0.2)',
		borderRadius: '8px',
		'@media (max-width: 450px)': {
			width: '90%',
		},
	},
	largeCard: {
		width: '100%',
		height: '95%',
		boxShadow:
			' 0 5px 10px rgba(154, 160, 185, 0.05),0 15px 40px rgba(166, 173, 201, 0.2)',
		borderRadius: '8px',
	},
});
export { divStyles };
