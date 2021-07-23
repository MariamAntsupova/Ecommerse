import { Typography , Card ,CardMedia , CssBaseline ,Grid  , CardContent, Button} from '@material-ui/core';
import useStyles from '../../Layouts/CardsLayout/CardsLayoutStyles';
import { SinglePage } from '../../Routes/Routes';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function CardComponent() {
  const classes = useStyles();
  const [cards , setCards] = useState();
  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(card => setCards(card))
        console.log(cards);
}, [])

  return (
    <>

              {cards && (
                <>
                {cards.map((el , index) =>(
                <Grid item key ={index}  xs={12} sm={6} md={4} >
                    <Link to={SinglePage.replace(':id', cards[index].id )} style={{textDecoration: 'none'}}> 
                      <Card className={classes.card}>
                          <CardMedia
                            className={classes.cardMedia}
                            image={cards[index].image}
                            title='Image Title'
                          />
                          <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant='h5'>
                              {cards[index].title}
                            </Typography>
                            <Typography >
                              {cards[index].price}
                            </Typography>
                          </CardContent>
                      </Card>
                    </Link>
                </Grid>
                  ))}
                  </>
            )}

    </>
  );
}

export default CardComponent;
