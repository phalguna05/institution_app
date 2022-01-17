import { Button, makeStyles, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';

const useStyles = makeStyles({
	formContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '100%',
	},
	textField: {
		marginBottom: '10px',
	},
});
function AdminForm() {
	const containerStyles = useStyles();
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email('Enter valid email address')
				.required('Required'),
			schoolName: Yup.string()
				.max(40, 'Please enter less than 40 characters')
				.required('Required'),
			address: Yup.string(),
			dateOfJoining: Yup.date().required('Required'),
			name: Yup.string()
				.max(20, 'Please enter less than 20 characters')
				.required('Required'),
			password: Yup.string()
				.min(8, 'Password must be minimum 8 characters')
				.required('Required'),
			phoneNumber: Yup.string().length(10, 'Enter valid phone number'),
		}),
		onSubmit: async (values) => {
			console.log(values);
		},
	});
	const generateUuid = () => {
		const valArr = uuidv4().split('-');
		formik.setFieldValue('password', valArr[0]);
	};
	return (
		<form onSubmit={formik.handleSubmit}>
			<div className={containerStyles.formContainer}>
				<TextField
					variant='outlined'
					id='name'
					name='name'
					className={containerStyles.textField}
					helperText={
						formik.errors.name && formik.touched.name
							? formik.errors.name
							: null
					}
					error={formik.errors.name && formik.touched.name}
					placeholder='Name'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.name}
				/>

				<TextField
					variant='outlined'
					id='email'
					name='email'
					className={containerStyles.textField}
					helperText={
						formik.errors.email && formik.touched.email
							? formik.errors.email
							: null
					}
					error={formik.errors.email && formik.touched.email}
					placeholder='Email'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>

				<TextField
					variant='outlined'
					id='phoneNumber'
					name='phoneNumber'
					className={containerStyles.textField}
					helperText={
						formik.errors.phoneNumber && formik.touched.phoneNumber
							? formik.errors.phoneNumber
							: null
					}
					error={formik.errors.phoneNumber && formik.touched.phoneNumber}
					placeholder='Mobile Number'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.phoneNumber}
				/>

				<TextField
					variant='outlined'
					id='schoolName'
					name='schoolName'
					className={containerStyles.textField}
					helperText={
						formik.errors.schoolName && formik.touched.schoolName
							? formik.errors.schoolName
							: null
					}
					error={formik.errors.schoolName && formik.touched.schoolName}
					placeholder='schoolName'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.schoolName}
				/>

				<TextField
					variant='outlined'
					id='address'
					name='address'
					className={containerStyles.textField}
					helperText={
						formik.errors.address && formik.touched.address
							? formik.errors.address
							: null
					}
					error={formik.errors.address && formik.touched.address}
					placeholder='address'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.address}
				/>

				<TextField
					variant='outlined'
					id='dateOfJoining'
					name='dateOfJoining'
					className={containerStyles.textField}
					type='date'
					helperText={
						formik.errors.dateOfJoining && formik.touched.dateOfJoining
							? formik.errors.dateOfJoining
							: null
					}
					error={formik.errors.dateOfJoining && formik.touched.dateOfJoining}
					placeholder='dateOfJoining'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.dateOfJoining}
				/>
				<div style={{ display: 'flex' }}>
					<TextField
						variant='outlined'
						id='password'
						name='password'
						className={containerStyles.textField}
						inputProps={{ readOnly: true }}
						placeholder='Password'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
						style={{ width: '60%' }}
					/>
					<Button
						variant='contained'
						color='primary'
						style={{ height: '40px', marginLeft: '15px', marginTop: '8px' }}
						onClick={() => generateUuid()}
					>
						Generate Password
					</Button>
				</div>
				<Button variant='contained' color='primary'>
					Add
				</Button>
			</div>
		</form>
	);
}
export default AdminForm;
