import { Typography, AppBar , Toolbar , Container, Box, CardMedia, useScrollTrigger} from '@material-ui/core';
import React from 'react';
import useStyles from './MainLayoutStyles';
import AppBarr from '../../Components/AppBar/AppBarN/AppBarr'
import Footer from '../../Components/Footer/Footer';

function MainLayout({children}) {
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100
      });

    return(
        <>
            <div className={classes.root}>
                    <AppBarr/>
                    <Box component="div" height={400}>
                            <CardMedia
                            className={classes.media}
                            component="img"
                            image="https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg"
                            />
                            <div className={classes.overlay}>
                                <Typography className={classes.typography} variant="h4"><b>Shop</b></Typography>
                            </div>
                    </Box>
                <Container>
                    {children}
                </Container>
                <Footer/>
                
            </div>
        </>
    )
}

export default MainLayout;