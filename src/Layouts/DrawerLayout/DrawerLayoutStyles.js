import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm' , 'md' )]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  drawerPaper: {
    width: drawerWidth,
    height: 'calc(100% - 64px)',
    top: 64,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

}));

export default useStyles