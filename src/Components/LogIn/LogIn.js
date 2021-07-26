import React from 'react';
import { Formik, Form ,  useFormik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {Box , TextField , Button ,FormControlLabel , Checkbox , Grid , Container , CssBaseline , Typography} from '@material-ui/core';
import { SignUp , HomePage} from '../../Routes/Routes';
import {Link} from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
      alignItems: 'center',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function LogIn ()  {
    const classes = useStyles();
  const { status , setStatus , resetForm , isSubmitting , setErrors} = useFormik({});
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 charaters').required('Password is required'),
  })
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={values => 
        {
            fetch("http://159.65.126.180/api/auth/login", {
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
        <Container component="main" maxWidth="xs">
        <CssBaseline />
         {status ? (<Link to={HomePage}/>) : (
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                autoComplete="email"
                autoFocus
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}

              <TextField
                variant="outlined"
                margin="normal"
                value={formik.values.password}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={formik.handleChange}
                autoComplete="current-password"
              />
              {formik.errors.password ? <div>{formik.errors.password}</div> : null}

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link onClick={handleClickOpen} variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"Forgot Password?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Relax and try to remember your password.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Thanks!
                    </Button>
                    <Button onClick={handleClose} color="primary">
                      Helpfull
                    </Button>
                  </DialogActions>
                </Dialog>
                <Grid item>
                  <Link to={SignUp}  >
                    <Typography variant="body2">"Don't have an account? Sign Up"</Typography>
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          )}
      </Container>
      )}
    </Formik>
  )
}

export default LogIn;