import { Typography , Card ,CardMedia , CssBaseline ,Grid  , CardContent, Button} from '@material-ui/core';
import useStyles from '../Layouts/CardsLayout/CardsLayoutStyles';
import image from '../Assets/Images/12.jpg';
import { SinglePage } from '../Routes/Routes';
import { Link } from 'react-router-dom';


const cards = [
    {
        image:{image},
        title: "Black denim jacket",
        price: "$99.99",
    },
    {
        image:{image},
        title: "Black denim jacket",
        price: "$99.99",
    },
    {
        image:{image},
        title: "Black denim jacket",
        price: "$99.99",
    },
    {
        image:{image},
        title: "Black denim jacket",
        price: "$99.99",
    },
    {
        image:{image},
        title: "Black denim jacket",
        price: "$99.99",
    },
    {
        image:{image},
        title: "Black denim jacket",
        price: "$99.99",
    },
    {
        image:{image},
        title: "Black denim jacket",
        price: "$99.99",
    },
    {
        image:{image},
        title: "Black denim jacket",
        price: "$99.99",
    },
        {
        image:{image},
        title: "Black denim jacket",
        price: "$99.99",
    },
];


function CardComponent() {
  const classes = useStyles();

  return (
    <>
              {cards.map((card)=>(
                <Grid item key={card} xs={12} sm={6} md={4} >
                   <Link to={SinglePage} style={{textDecoration: 'none'}}> 
                    <Card className={classes.card} >
                        <CardMedia
                          className={classes.cardMedia}
                          image={image}
                          title='Image Title'
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant='h5'>
                            Black denim jacket
                          </Typography>
                          <Typography >
                            $99.99
                          </Typography>
                        </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
    </>
  );
}

export default CardComponent;
