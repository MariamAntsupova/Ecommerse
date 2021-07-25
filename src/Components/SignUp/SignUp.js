import React from 'react';
import { Formik, Form ,  useFormik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {TextField , Button , CssBaseline , FormControlLabel ,Checkbox , Grid , Container} from '@material-ui/core';
import {Link} from "react-router-dom";
import { LogIn } from '../../Routes/Routes';

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
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
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
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}    
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}    
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}    
                    autoComplete="email"
                  />
                  {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}    
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="confirmPassword"
                    value={formik.values.password}
                    onChange={formik.handleChange}    
                    label="Confirm Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}

                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to={LogIn} variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
      </Container>
      )}
    </Formik>
  )
}

export default SignUp;