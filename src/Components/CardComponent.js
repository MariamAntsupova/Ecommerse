import { Typography , Card ,CardMedia , CssBaseline ,Grid  , CardContent, Button} from '@material-ui/core';
import useStyles from '../Layouts/CardsLayout/CardsLayoutStyles';
import image from '../Assets/Images/12.jpg';
import { SinglePage } from '../Routes/Routes';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';



function CardComponent() {
  const classes = useStyles();

  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Black denim jacket",
      price: "$99.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      model: "Shirt 5407x",
      color: "Blue",
      delivery: "USA, Europe",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
      imgGroup: [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
      ],
    },
    {
      id: 2,
      title: "Grey sweater",
      price: "$21.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      model: "Shirt 5407x",
      color: "Grey",
      delivery: "USA, Europe",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",
      imgGroup: [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
      ],
    },
    {
      id: 3,
      title: "Blue denim shirt",
      price: "$17.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      model: "Shirt 5407x",
      color: "Blue",
      delivery: "USA, Europe",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
      imgGroup: [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
      ],
    },
    {
      id: 4,
      title: "Blue denim shirt",
      price: "$17.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      model: "Shirt 5407x",
      color: "Blue",
      delivery: "USA, Europe",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
      imgGroup: [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
      ],
    },
    {
      id: 5,
      title: "Red hoodie",
      price: "$35.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      model: "Shirt 5407x",
      color: "Red",
      delivery: "USA, Europe",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",
      imgGroup: [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
      ],
    },
    {
      id: 6,
      title: "Black denim jacket",
      price: "$99.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      model: "Shirt 5407x",
      color: "Blue",
      delivery: "USA, Europe",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
      imgGroup: [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
      ],
    },
    {
      id: 7,
      title: "Grey sweater",
      price: "$21.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      model: "Shirt 5407x",
      color: "Grey",
      delivery: "USA, Europe",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",
      imgGroup: [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
      ],
    },
    {
      id: 8,
      title: "Blue denim shirt",
      price: "$17.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      model: "Shirt 5407x",
      color: "Blue",
      delivery: "USA, Europe",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
      imgGroup: [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
      ],
    },
    {
      id: 9,
      title: "Blue denim shirt",
      price: "$17.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      model: "Shirt 5407x",
      color: "Blue",
      delivery: "USA, Europe",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
      imgGroup: [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
      ],
    },
  ]);
  
  return (
    <>
              {cards.map((el, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} >
                   <Link to={SinglePage} style={{textDecoration: 'none'}}> 
                    <Card className={classes.card} >
                        <CardMedia
                          className={classes.cardMedia}
                          image={el.image}
                          title='Image Title'
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant='h5'>
                            {el.title}
                          </Typography>
                          <Typography >
                            {el.price}
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
