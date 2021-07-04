import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,

    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,

    },
    appBar: {
      backgroundColor: 'transparent',
      transition: theme.transitions.create(['background-color'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.standard
      }),
      padding: '0 20px',
      borderBottom: `1px solid ${theme.palette.divider}`
    },
    appBarScrolled: {
      backgroundColor: 'white',
      color : "black",
      borderBottom: '1px solid #ededed',
      transition: theme.transitions.create(['background-color'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.standard
      })
    },
    button:{
      transition: theme.transitions.create(['border-color'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.standard
      }),
      color: 'white',
      borderColor: 'white',
      borderRadius: 16 ,
    },
    buttonScrolled: {
      color: '#42AAFF',
      borderColor: '#42AAFF',
      borderRadius: 16,
      transition: theme.transitions.create(['border-color'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.standard
      })
    },
    nav: {
      marginRight: '20px'
    },
    shop : {
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
    overlay:{
      top: '-531px',
      width: '100 %',
      height: '532px',
      position: 'relative',
      background: '#000000a8',
      textAlign: 'center',
    },
    media:{
      height: 400,
    },
    typography:{
        top: '280px',
        position: 'relative',
        color: '#fff',
    },
    mr: { 
      marginRight: '10px'
    },

  }));
  
  export default useStyles