import React from 'react';
import Description from "./Description";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import {Link, Route, Switch,Router,  useRouteMatch} from "react-router-dom";
import Information from './Information';
import Review from './Review';
import { Desc , Info , Rev } from '../../Routes/Routes';
const useStyles = makeStyles({
    root: {
        color: '#1266F1',
        fontSize: '20px'
    },
});
function DetailsComponent () {
    const classes = useStyles();
    return(
    <>
    <div className={classes.root}>
            <AppBar position="static" color="white" component={Box} boxShadow='none'>
                <Tabs
                    value={Description}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Description" component={Link}/>
                    <Tab label="Information" component={Link}/>
                    <Tab label="Review" component={Link}/>
                </Tabs>
            </AppBar>
            <Box border='0.5px solid #E5E5E5' marginTop='10px' marginBottom='10px'> </Box>
            {/* <Router>
                <Switch>
                    <Route path={Info} component={Information}/>
                    <Route path = {Rev} component={Review} />
                    <Route path = {Desc}   component={Description} />
                </Switch>
            </Router> */}
        <Description/>
        </div>
    </>
    )
}

export default DetailsComponent ; 