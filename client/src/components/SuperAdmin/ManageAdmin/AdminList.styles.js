import { makeStyles } from '@material-ui/core';

const divStyles = makeStyles({
	adminListContainer: {
		overflow: 'auto',
		height: '70vh',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
});
export { divStyles };
