import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Prod  , User , Cat, Admin} from '../../Routes/Routes';
import Products from '../../Components/AdminComponents/Products';
import Users from '../../Components/AdminComponents/Users';
import Categories from '../../Components/AdminComponents/Categories';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminNav from '../../Components/AdminComponents/AdminNav/AdminNav';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    margin: 'auto'
  }
}));

function AdminPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AdminNav/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Router>
        <Switch>
          <div>
            <Route exact path={Admin}> Hello </Route>
            <Route exact path={Prod}> <Products/> </Route>
            <Route exact path={User} component={Users}/>
            <Route exact path={Cat} component={Categories}/>
          </div>
        </Switch>
      </Router>
      </main>
    </div>
  );
}

// AdminPage.propTypes = {
//   window: PropTypes.func,
// };

export default AdminPage;
