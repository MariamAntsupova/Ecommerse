import { Typography, AppBar , Toolbar , Button, Container, Box, Card, CardMedia, Backdrop} from '@material-ui/core';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './MainLayoutStyles';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function MainLayout({children}) {
    const classes = useStyles();

    return(
        <>
            <div className={classes.root}>
                    <AppBar position="fixed" className={classes.appBar} wrap>
                        <Toolbar wrap>
                            <Typography className={classes.title} variant="h3" edge="start" noWrap>
                                <i class="fab fa-mdb"></i>
                            </Typography>
                            <IconButton aria-label="search" color="inherit">
                                <ShoppingCartIcon />
                            </IconButton>
                            <Typography variant="h5"  className={classes.nav} xs={12} sm={3} wrap>
                                Shop
                            </Typography>
                            <Typography variant="h5" wrap className={classes.nav} >
                                Contact
                            </Typography>
                            <Typography variant="h5" wrap className={classes.nav} >
                                Sign in
                            </Typography>
                            <Button variant='outlined' className={classes.button}>
                                Sign Up
                            </Button>
                            <IconButton aria-label="display more actions" edge="end" color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>

                    <Box component="div">
                    <Card className={classes.cardStyle}>
                        <CardMedia
                        width={1}
                        component="img"
                        image="https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg"
                        className = {classes.media}
                        />
                        <div >
                            <Backdrop className={classes.overlay}>
                                <Typography 
                                    className = {classes.shop} 
                                    variant="h3" noWrap >
                                    Shop
                                </Typography>     
                            </Backdrop>                   
                        </div>
                    </Card>
                    </Box>
                <Container>
                    {children}
                </Container>
            </div>
        </>
    )
}

export default MainLayout;