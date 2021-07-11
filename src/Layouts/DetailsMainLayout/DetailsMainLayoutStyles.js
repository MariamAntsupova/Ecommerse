import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
    card: {
        height: '100%',
    },
    cardMedia:{
        paddingTop: '100%',
    },
    title: {
        color:'#4F4F4F' ,
        fontWeight:'bold'
    },  
    root: {
        color: '#1266F1',
        fontSize: '20px',
        
    },
    textfield: {
        textAlign:'center' ,
    }

}));

export default useStyles;