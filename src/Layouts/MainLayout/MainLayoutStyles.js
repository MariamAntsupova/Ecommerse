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
      minWidth: '100',
      backgroundColor: 'rgba(128, 128, 128, 0.678)'
    },
    nav: {
      marginRight: '20px'
    },
    button:{
      color: 'white',
      borderColor: 'white',
      borderRadius: 16
    },
    overlay : {
      color: 'black',
      zIndex: theme.zIndex.CardMedia +1,
    },
    // media: {
    //   opacity: 0.5 , 
    // },
    shop : {
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    }
  }));
  
  export default useStyles