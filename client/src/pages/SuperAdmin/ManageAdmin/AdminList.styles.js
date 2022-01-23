import { makeStyles } from '@material-ui/core';

const divStyles = makeStyles({
	adminListContainer: {
		overflow: 'auto',
		height: '70vh',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	adminDetailContainer: {
		marginLeft: '20px',
		overflow: 'hidden',
		height: '70vh',
		transition: ' all .75s ease',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	detailsCard: {
		width: '90%',
		padding: '8px',
		height: 'fit-content',
		boxShadow:
			' 0 5px 10px rgba(154, 160, 185, 0.05),0 5px 40px rgba(166, 173, 201, 0.2)',
		borderRadius: '8px',
		backgroundColor: '#f1dfd1',
		backgroundImage: 'linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%)',
	},
});

const typographyStyles = makeStyles({
	heading: {
		fontWeight: 'bolder',
		fontSize: '24px',
		marginBottom: '20px',
		marginTop: '3vh',
	},
	subHeading: {
		fontWeight: 'bold',
		fontSize: '16px',
		marginBottom: '8px',
	},
	value: {
		fontWeight: 'normal',
		fontSize: '14px',
		overflow: 'hidden',
	},
});
export { divStyles, typographyStyles };
