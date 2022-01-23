/* eslint-disable react/function-component-definition */
import {
	Divider,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	TextField,
	Typography,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import EditIcon from '@material-ui/icons/Edit';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetCall } from '../../../services';
import { addAdmins } from '../Reducers/actions';
import { divStyles, typographyStyles } from './AdminList.styles';

const AdminList = () => {
	const superAdmin = useSelector((state) => state.superAdmin);
	const classes = divStyles();
	const textStyles = typographyStyles();
	const dispatch = useDispatch();

	const [searchValue, setSearchValue] = useState('');
	const [showDetails, setShowDetails] = useState(false);
	const [schoolDetails, setSchoolDetails] = useState({});
	useEffect(() => {
		apiGetCall('/api/v1/superAdmin/getAllAdmins').then((res) =>
			dispatch(addAdmins(res.data))
		);
	}, []);
	const handleDetailsClick = (obj) => {
		setSchoolDetails(obj);
		setShowDetails(true);
	};
	const convertDate = (doj) => {
		const date = new Date(doj);
		return date.toDateString().slice(4);
	};
	return (
		<>
			{!showDetails && (
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
										: item.schoolName
												.toLowerCase()
												.match(searchValue.toLowerCase())
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
												<IconButton
													edge='end'
													onClick={() => handleDetailsClick(item)}
												>
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
			)}
			{showDetails && (
				<div className={classes.adminDetailContainer}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							textAlign: 'center',
							justifyContent: 'space-between',
						}}
					>
						<IconButton onClick={() => setShowDetails(false)}>
							<ChevronLeftIcon />
						</IconButton>
						<Typography className={textStyles.heading}>
							{schoolDetails.schoolName}
						</Typography>
						<IconButton color='primary'>
							<EditIcon />
						</IconButton>
					</div>
					<Grid container style={{ height: '100%' }}>
						<Grid item xs={6}>
							<div className={classes.detailsCard}>
								<Typography className={textStyles.subHeading}>
									Admin Name
								</Typography>

								<Typography className={textStyles.value}>
									{schoolDetails.name}
								</Typography>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className={classes.detailsCard}>
								<Typography className={textStyles.subHeading}>
									Admin Email
								</Typography>
								<Typography className={textStyles.value}>
									{schoolDetails.email}
								</Typography>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className={classes.detailsCard}>
								<Typography className={textStyles.subHeading}>
									Admin Phone Number
								</Typography>
								<Typography className={textStyles.value}>
									{schoolDetails.phoneNumber}
								</Typography>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className={classes.detailsCard}>
								<Typography className={textStyles.subHeading}>
									Date Created
								</Typography>
								<Typography className={textStyles.value}>
									{convertDate(schoolDetails.dateOfJoining)}
								</Typography>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className={classes.detailsCard}>
								<Typography className={textStyles.subHeading}>
									Address
								</Typography>
								<Typography className={textStyles.value}>
									{schoolDetails.address}
								</Typography>
							</div>
						</Grid>
					</Grid>
				</div>
			)}
		</>
	);
};
export default AdminList;
