import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import AppBarN from "../AppBarN/AppBarN";

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
   
 function AppBarCollapse (props)  {
     return(
        <div className={props.classes.root}>
            <ButtonAppBarCollapse>
                    <AppBarN/>
            </ButtonAppBarCollapse>
            <div className={props.classes.buttonBar} id="appbar-collapse">
                    <AppBarN/>
            </div>
        </div>
     );
}
 
 export default withStyles(styles)(AppBarCollapse);
 