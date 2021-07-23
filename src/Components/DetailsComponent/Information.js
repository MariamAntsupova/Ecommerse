import React from 'react';
import {Box, makeStyles} from "@material-ui/core";

const useStyle=makeStyles({
    style: {
        display : 'flex',
        border: '1px solid #E4E4E4',
        padding: '15px',
    },
    first: {
        width: '20%',
        color: '#4F4F4F'
    },
    second: {
        color: '#554F4F',
        fontStyle: 'italic',
        fontSize: '15px'
    }

})
const Information = () => {
    const classes=useStyle();
    return (
        <Box>
            <Box fontSize='20px' color='#4F4F4F' paddingBottom='15px' fontWeight='bold'>Additional Information</Box>
            <Box className={classes.style} ><Box className={classes.first}>Weight</Box><Box className={classes.box2}>0.3 kg</Box></Box>
            <Box className={classes.style} bgcolor='#F2F2F2'><Box className={classes.first}>Dimensions</Box><Box className={classes.second}>50 × 60 cm</Box></Box>
        </Box>
    );
};

export default Information;