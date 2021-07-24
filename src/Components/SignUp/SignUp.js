import React from 'react';
import { Formik, Form ,  useFormik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {Box , TextField , Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  main: {
      display: 'flex',
      flexDirection: 'column',
      padding: '150px'
  }
}));


function SignUp ()  {
    const classes = useStyles();
  const { status , setStatus , resetForm , isSubmitting , setErrors} = useFormik({});
  const validate = Yup.object({
    firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 charaters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => 
        {
            fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                body: JSON.stringify({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                    confirmPassword: values.confirmPassword,
                }),
              })
                .then((res) => res.json())
                .then((json) => {
                  console.log(json);
                  setStatus(true);
                  resetForm();
                })
                .catch((error) => {
                  console.log(error);
                })
            }
      }
    >
      {formik => (
        <Box className={classes.main}>
            <TextField
                id="firstName"
                value={formik.values.firstName}
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                label="firstName"
                variant="outlined"
                style={{ marginBottom: "20px" }}
            />
            {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
            <TextField
                id="lastName"
                value={formik.values.lastName}
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                label="lastName"
                variant="outlined"
                style={{ marginBottom: "20px" }}
            />
            {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
            <TextField
                id="email"
                value={formik.values.email}
                name="email"
                type="email"
                onChange={formik.handleChange}
                label="Your email"
                variant="outlined"
                style={{ marginBottom: "20px" }}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <TextField
                id="password"
                value={formik.values.password}
                name="password"
                type="password"
                onChange={formik.handleChange}
                label="Your password"
                variant="outlined"
                style={{ marginBottom: "20px" }}

            />
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}

            <TextField
                id="confirmPassword"
                value={formik.values.password}
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                label="confirm Password"
                variant="outlined"
                style={{ marginBottom: "20px" }}

            />
            {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
            
            <Button variant="contained" color="primary" type="submit" style={{margin:'5% auto', width: '150px'}}>
                Sign Up
            </Button>
            
        </Box>
      )}
    </Formik>
  )
}

export default SignUp;