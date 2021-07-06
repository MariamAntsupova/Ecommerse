import React from "react";
import { Badge, Button, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography, useScrollTrigger } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {IconFlagUK} from 'material-ui-flags';
import IconButton from '@material-ui/core/IconButton';
import useStyles from '../MainLayoutStyles';

 const styles = theme => ({
   root: {
     position: "absolute",
     right: 0
   },
   buttonBar: {
     [theme.breakpoints.down("xs")]: {
       display: "none"
     },
     margin: "10px",
     paddingLeft: "16px",
     right: 0,
     position: "relative",
     width: "100%",
     background: "transparent"
   }
 });
   
 function AppBarN ()  {
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100
      });

     return(
        <div>
            <Toolbar>
                    <IconButton aria-label="search" color="inherit">
                        <Badge badgeContent={1} color = "secondary" className={classes.mr}></Badge> <ShoppingCartIcon />
                    </IconButton>
                    <FormControl>
                        <Select defaultValue={0} id="grouped-select">
                        <MenuItem color='white'  value={0}><IconButton><IconFlagUK/></IconButton></MenuItem>
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
        </div>
     );
}
 
 export default withStyles(styles)(AppBarN);
 