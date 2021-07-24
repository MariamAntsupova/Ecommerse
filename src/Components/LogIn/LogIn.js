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


function LogIn ()  {
    const classes = useStyles();
  const { status , setStatus , resetForm , isSubmitting , setErrors} = useFormik({});
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 charaters').required('Password is required'),
  })
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={values => 
        {
            fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                body: JSON.stringify({
                  email: values.email,
                  password: values.password,
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
            />
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}
            <Button variant="contained" color="primary" type="submit" style={{margin:'5% auto', width: '150px'}}>
                Sign in
            </Button>
            
        </Box>
      )}
    </Formik>
  )
}

export default LogIn;