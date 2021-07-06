import { Typography, AppBar , Toolbar , Container, Box, CardMedia, useScrollTrigger} from '@material-ui/core';
import React from 'react';
import useStyles from './MainLayoutStyles';

import AppBarCollapse from './appBarCollapse/AppBarCollapse';

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
                            <AppBarCollapse/>
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