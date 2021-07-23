import { Typography, AppBar , Toolbar , Container, Box, CardMedia, useScrollTrigger} from '@material-ui/core';
import React from 'react';
import useStyles from '../../../Layouts/MainLayout/MainLayoutStyles';

import AppBarCollapse from '../appBarCollapse/AppBarCollapse';

function AppBarr() {
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100
      });

    return(
        <>
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
        </>
    )
}

export default AppBarr;