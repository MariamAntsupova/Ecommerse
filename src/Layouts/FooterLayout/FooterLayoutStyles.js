import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
    footer: {
        backgroundColor: "rgb(46,46,46)",
        padding: '50px 0'
    },
    banner: {
        marginTop: '150px',
        backgroundColor: '#1266F1',
    },
    col: {
        padding: '30px 100px',
        color: '#eeeded'
    },
    line: {
        width: '60px',
        height: '1px',
        backgroundColor: '#1266F1',
        marginTop: '10px'
    },
    col: {
        padding: '20px 100px',
        color: 'white'
    },
    mr : {
        marginRight: '20px'
    },
    mt : {
        marginTop: '20px'
    }
}));

export default useStyles;