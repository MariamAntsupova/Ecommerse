import React, { useEffect , useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
import SimpleModal from "./Modal";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Products() {
  const classes = useStyles();
    const [data,setData]=useState([]);

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                setData(json);
                console.log(json);
            })
            .catch(err=> {
                console.log(err)
            })
    },[])
  return (
    <>
        <SimpleModal/>
        {/* <Button variant="outlined" >Add Product</Button> */}
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right">Category</StyledTableCell>
            </TableRow>
            </TableHead>
            {(typeof data!='undefined') ? (
                        <>
                            {data.map((el,index) => {
                                    return (
                                        <TableBody>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">
                                                        {el.title}  
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">${el.price}</StyledTableCell>
                                                    <StyledTableCell align="right">{el.category}</StyledTableCell>
                                                </StyledTableRow>
                                            </TableBody>

                                    )
                                })}
                        </>
                        ) : ('')
                    }

        </Table>
        </TableContainer>
    </>
  );
}
