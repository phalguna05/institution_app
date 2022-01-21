/* eslint-disable react/function-component-definition */
import {
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	TextField,
	Typography,
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetCall } from '../../../services';
import { addAdmins } from '../Reducers/actions';
import { divStyles } from './AdminList.styles';

const AdminList = () => {
	const classes = divStyles();
	const dispatch = useDispatch();

	const superAdmin = useSelector((state) => state.superAdmin);
	const [searchValue, setSearchValue] = useState('');
	useEffect(() => {
		apiGetCall('/api/v1/superAdmin/getAllAdmins').then((res) =>
			dispatch(addAdmins(res.data))
		);
	}, []);
	console.log(superAdmin.adminList);
	return (
		<div>
			<TextField
				variant='outlined'
				placeholder='Search for school name....'
				style={{ width: '100%', marginBottom: '15px' }}
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			/>
			<Divider />
			<div className={classes.adminListContainer}>
				<List style={{ overflow: 'auto' }}>
					{superAdmin.adminList
						.filter((item) =>
							searchValue === ''
								? true
								: item.schoolName.toLowerCase().match(searchValue.toLowerCase())
						)
						.map((item) => (
							<div>
								<ListItem>
									<ListItemText>
										<Typography style={{ fontWeight: 'bolder' }}>
											{item.schoolName}
										</Typography>
									</ListItemText>
									<ListItemSecondaryAction>
										<IconButton edge='end'>
											<ChevronRightIcon />
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>
								<Divider />
							</div>
						))}
				</List>
			</div>
		</div>
	);
};
export default AdminList;
