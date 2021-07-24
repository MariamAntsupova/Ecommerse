import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

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
      avatar: {
        backgroundColor: blue[100],
        color: blue[600],
      },
}));

export default useStyles;