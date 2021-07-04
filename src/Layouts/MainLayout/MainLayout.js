import { Typography, AppBar , Toolbar , Button, Container, Box, CardMedia, Badge, useScrollTrigger, FormControl, Select, MenuItem, InputLabel} from '@material-ui/core';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './MainLayoutStyles';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {IconFlagUK} from 'material-ui-flags';

function MainLayout({children}) {
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100
      });

    return(
        <>
            <div className={classes.root}>
                    <AppBar 
                        position="fixed" 
                        wrap
                        elevation={0}
                        className={`${classes.appBar} ${
                        trigger === false ? '' : classes.appBarScrolled
                        }`}
                        xs={12} sm={3}
                        wrap
                        >
                        <Toolbar wrap>
                            <Typography className={classes.title} variant="h3" edge="start" noWrap>
                                <i class="fab fa-mdb"></i>
                            </Typography>
                            <IconButton aria-label="search" color="inherit">
                                <Badge badgeContent={1} color = "secondary" className={classes.mr}></Badge> <ShoppingCartIcon />
                            </IconButton>
                            <InputLabel><IconButton><IconFlagUK/></IconButton></InputLabel>
                            <FormControl>
                                <Select defaultValue="" id="grouped-select">
                                <MenuItem color='white'  value={1}>Action</MenuItem>
                                <MenuItem color='white' value={2}>Another Action</MenuItem>
                                <MenuItem color='white' value={3}>Something Else Here</MenuItem>
                                </Select>
                            </FormControl>
                            <Typography variant="h7"  className={classes.nav} xs={12} sm={3} wrap>
                                Shop
                            </Typography>
                            <Typography variant="h7" wrap className={classes.nav} >
                                Contact
                            </Typography>
                            <Typography variant="h7" wrap className={classes.nav} >
                                Sign in
                            </Typography>
                            <Button 
                                variant='outlined' 
                                elevation={0}
                                className={`${classes.button} ${
                                trigger === false ? '' : classes.buttonScrolled
                                }`}
                                >
                                Sign Up
                            </Button>
                            <IconButton aria-label="display more actions" edge="end" color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
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
            </div>
        </>
    )
}

export default MainLayout;