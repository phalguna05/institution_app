import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Topbar from './TopBar';

const useStyles = makeStyles({
	contentShift: {
		marginLeft: '260px',
		marginTop: '100px',
	},
	content: {
		marginTop: '100px',
		marginLeft: '100px',
	},
});
function SuperAdminDashboard() {
	const classes = useStyles();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const checkIfOpen = (bool) => {
		setIsSidebarOpen(bool);
	};
	return (
		<div>
			<Topbar checkIfOpen={checkIfOpen} />
			<div className={isSidebarOpen ? classes.contentShift : classes.content}>
				<p>Hello</p>
			</div>
		</div>
	);
}
export default SuperAdminDashboard;
