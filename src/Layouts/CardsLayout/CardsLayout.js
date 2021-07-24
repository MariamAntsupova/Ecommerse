import { Typography , Card ,CardMedia , CssBaseline ,Grid  , Container, Button, CardContent, Box, Fab} from '@material-ui/core';
import useStyles from './CardsLayoutStyles';
import CardComponent from '../../Components/CardComponent/CardComponent';
import React, { useState } from 'react';
import { Pagination } from '@material-ui/lab';


function Cards() {
  const classes = useStyles();
  return (
    <>
        <CssBaseline />

        <main>
          <Container className={classes.cardGrid}>
            <Grid item xs={12} className={classes.grid}>
                <Grid item xs={3}>
                    <a href="#!" className={classes.i}><i className="fas fa-th-list fa-lg " ></i></a>
                    <a href="#!" className={classes.i}><i className="fas fa-th-large fa-lg"></i></a>
                </Grid>
                <Typography>Label example</Typography>
                <Box>
                    <Pagination count={10} color="primary" />     
                </Box>
            </Grid >
            <Grid container spacing={4}>
              <CardComponent/>
            </Grid>
            <Grid item xs={12} className={classes.grid}>
                <Grid item xs={3}>
                    <a href="#!" className={classes.i}><i className="fas fa-th-list fa-lg " ></i></a>
                    <a href="#!" className={classes.i}><i className="fas fa-th-large fa-lg"></i></a>
                </Grid>
                <Typography>Label example</Typography>
                <Box>
                    <Pagination count={10} color="primary" />     
                </Box>
            </Grid>
          </Container>
        </main>

    </>
  );
}

export default Cards;
