import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HttpsIcon from '@material-ui/icons/Https';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import loginImage from '../../../Images/login.svg';
import { AxiosInstance } from '../../../services/index';
import { loginSuccess } from '../Reducers/actions';
import { divStyles } from './login.Styles';

function LoginComponent({ nextPath, component }) {
  const containerStyles = divStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Enter valid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Password must be minimum 8 characters')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      const res = await AxiosInstance.post(
        `/api/v1/${component}/login`,
        values
      );

      if (res.status === 200) {
        dispatch(loginSuccess(res.data.access_token));
        setServerError(undefined);
        navigate(nextPath);
      } else {
        setServerError(res.response.data.error);
      }
    },
  });
  return (
    <div className={containerStyles.loginContainer}>
      <div className={containerStyles.imageContainer}>
        <img
          src={loginImage}
          alt="login"
          className={containerStyles.loginImage}
        />
      </div>
      <div className={containerStyles.rightContainer}>
        <form onSubmit={formik.handleSubmit}>
          <div className={containerStyles.formContainer}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ fontWeight: 'bolder' }}
            >
              Login
            </Typography>

            <TextField
              variant="outlined"
              id="email"
              name="email"
              helperText={
                formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : null
              }
              error={formik.errors.email && formik.touched.email}
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <AccountBoxIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              variant="outlined"
              id="password"
              name="password"
              type="password"
              error={formik.errors.password && formik.touched.password}
              helperText={
                formik.errors.password && formik.touched.password
                  ? formik.errors.password
                  : null
              }
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <HttpsIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" color="primary">
              Log in
            </Button>
            {serverError && (
              <div className={containerStyles.errorContainer}>
                <p style={{ marginTop: '2px' }}>{serverError}</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginComponent;
