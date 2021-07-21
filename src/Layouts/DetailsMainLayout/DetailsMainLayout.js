import { Typography,Radio ,FormControlLabel,TextField,Container,Grid  ,  Button, Box} from '@material-ui/core';
import useStyles from './DetailsMainLayoutStyles';
import image from '../../Assets/Images/12.jpg';
import { Rating } from "@material-ui/lab";
import React, { useState , useEffect } from 'react' ;
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useParams } from 'react-router-dom';



function DetailsMainLayout() {
  const classes = useStyles();
  const [value, setValue] = useState();
  const [count, setCount] = useState(1);
  const [singleCard , setSingleCard] = useState();
  const { id } = useParams();
  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(single => setSingleCard(single))
        console.log(singleCard);
}, [id])

  return (
      <>
    {singleCard && (
    <Container>
        <Grid container >
            <Grid item xs={12} sm={6} padding='50px ' component={Box}>
                <Box ><img alt='img' src={singleCard.image} width='100%' /></Box>
                <Box display='flex' justifyContent='space-between' mt='15px'>
                    <img src={singleCard.image} alt='img' width='22%'/>
                    <img src={singleCard.image} alt='img' width='22%'/>
                    <img src={singleCard.image} alt='img' width='22%'/>
                    <img src={singleCard.image} alt='img' width='22%'/>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} padding='50px ' component={Box}>
                <Box>
                    <Box marginTop='20px'>
                      <Typography variant='h6' className={classes.title}>{singleCard.title}</Typography>
                    </Box>
                    <Box marginTop='20px'>
                      <Typography variant='p'>{singleCard.category}</Typography>
                    </Box>
                    <Box marginTop='20px' component="fieldset" borderColor="transparent">
                       <Rating
                        style={{color:'#1266F1'}}
                        value={4}
                        newValue={4}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        
                        />
                    </Box>                    
                    <Box marginTop='20px'>
                        <Typography variant='h6' className={classes.title}>{singleCard.price}</Typography>
                    </Box>
                    <Box  marginTop='30px'> 
                        {singleCard.description}
                    </Box>
                    <Grid sm={6} xs={12} >
                      <Box marginTop='30px' fontSize='15px' color='#4F4F4F' display='flex' justifyContent='space-between'>
                          <Box fontWeight='bold'> Model </Box>
                          <Box color='#7D5755' >Shirt 5407X</Box>
                      </Box>
                      <Box marginTop='30px' fontSize='15px' color='#4F4F4F' display='flex'  justifyContent='space-between'>
                          <Box fontWeight='bold'>Color </Box>
                          <Box color='#7D5755'>Blue</Box>
                      </Box>
                      <Box marginTop='30px' fontSize='15px' color='#4F4F4F' display='flex'  justifyContent='space-between'>
                          <Box fontWeight='bold'>Delivery </Box>
                          <Box color='#7D5755'>	USA, Europe</Box>
                      </Box>
                      <Box borderBottom='1px solid #E5E5E5' marginTop='30px'></Box>
                    </Grid>
                </Box>
                <Box mt='20px' display='flex'>
                    <Box>
                        <Box color='#554F4F' fontSize='15px'>Quantity</Box>
                        <Box>
                          <form noValidate autoComplete="off" >
                            <Button variant='outlined' onClick={() => setCount(count -1)} >-</Button>
                            <Button className={classes.textfield} variant="outlined">{count}</Button>
                            <Button variant='outlined' onClick={() => setCount(count +1)} >+</Button>
                          </form>
                        </Box>
                    </Box>
                    <Box ml='15px'>
                        <Box color='#554F4F' fontSize='15px'>Select size</Box>
                        <Box display='flex' mt='10px'>
                            <FormControlLabel value="small" control={<Radio color="primary" />} label="SMALL" />
                            <FormControlLabel value="medium" control={<Radio color="primary" />} label="MEDIUM" />
                            <FormControlLabel value="large" control={<Radio color="primary" />} label="LARGE" />
                        </Box>
                    </Box>
                </Box>
                <Box display='flex' mt='25px'>
                    <Box><Button variant="contained" color="primary" >buy Now</Button></Box>
                    <Box ml='5px'><Button variant="contained"><ShoppingCartIcon />Add to Cart</Button></Box>
                </Box>
            </Grid>
        </Grid>
        <Box padding='0 50px '>
            <Box border='0.5px solid #E5E5E5' marginTop='30px'> </Box>
        </Box>
    </Container>
    )}
    </>
);
}

export default DetailsMainLayout;
