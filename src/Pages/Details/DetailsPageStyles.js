import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
    appBarScrolled: {
        backgroundColor: 'white',
        color : "black",
        borderBottom: '1px solid #ededed',
    },

      media:{
        height: 400,
      },
      typography:{
          top: '100px',
          position: 'relative',
          color: '#323232',
      },
}));

export default useStyles;