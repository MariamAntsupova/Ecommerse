import { Typography , Card ,CardMedia , CssBaseline ,Grid  , Container, Button, CardContent, Box, Fab} from '@material-ui/core';
import useStyles from './CardsLayoutStyles';
import CardComponent from '../../Components/CardComponent/CardComponent';
import React, { useState } from 'react';


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
                  <Button className={classes.button}><i class="fas fa-angle-left"></i></Button>
                  <Fab size='small' style={{backgroundColor: '#4285F4' , marginRight: '5px'}}>1</Fab>
                  <Fab size='small' style={{ marginRight: '5px'}}>2</Fab>
                  <Fab size='small' >3</Fab>
                  <Button className={classes.button}><i class="fas fa-angle-right"></i></Button>
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
                  <Button className={classes.button}><i class="fas fa-angle-left"></i></Button>
                  <Fab size='small' style={{backgroundColor: '#4285F4' , marginRight: '5px'}}>1</Fab>
                  <Fab size='small' style={{ marginRight: '5px'}}>2</Fab>
                  <Fab size='small' >3</Fab>
                  <Button className={classes.button}><i class="fas fa-angle-right"></i></Button>
                </Box>
            </Grid>
          </Container>
        </main>

    </>
  );
}

export default Cards;
