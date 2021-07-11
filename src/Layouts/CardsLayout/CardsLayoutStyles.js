import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
    container: {
      padding: theme.spacing(8 , 0 , 6)
    },

    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign:'center',
    },
    cardMedia:{
        paddingTop: '100%',
    },
    cardContent: {
        flexGrow:1,
    },
    i: {
        color: 'black',
        marginRight: '10px',

    },
    grid: {
        display: 'flex' ,
        flexDirection: 'row',
        justifyContent :'space-between' ,
        alignItems: 'center',
        padding: '10px'
    }

}));

export default useStyles;