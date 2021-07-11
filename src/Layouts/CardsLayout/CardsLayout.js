import { Typography , Card ,CardMedia , CssBaseline ,Grid  , Container, Button, CardContent, Box, Fab} from '@material-ui/core';
import useStyles from './CardsLayoutStyles';
import CardComponent from '../../Components/CardComponent';
import React, { useState } from 'react';


function Cards() {
  const classes = useStyles();
  const [cards, setCards] = useState([
    {
      title: "Black denim jacket1",
      price: "99,99",
      disCountPrice: "21,99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      review: 3,
      model: "Shirt 5407x",
      color: "Blue",
      delivery: "USA, Europe",
      size: ["small", "medium", "large"],
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
      imgGroup: [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
      ],
      id: 1
    },
    {
      title: "Black denim jacket2",
      price: "99,99",
      disCountPrice: false,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      reviewCount: 7,
      review: 2,
      model: "Shirt 5407x",
      color: "Blue",
      delivery: "USA, Europe",
      size: ["small", "medium", "large"],
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
      imgGroup: [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
      ],
      id: 2
    },
    {
      title: "Black denim jacket3",
      price: "99",
      disCountPrice: false,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      reviewCount: 4,
      review: 5,
      model: "Shirt 5407x",
      color: "Blue",
      delivery: "USA, Europe",
      size: ["small", "medium", "large"],
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
      imgGroup: [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
      ],
      id: 3
    },
    {
      title: "Black denim jacket4",
      price: "59,21",
      disCountPrice: "31,99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      reviewCount: 10,
      review: 4,
      model: "Shirt 5407x",
      color: "Blue",
      delivery: "USA, Europe",
      size: ["small", "medium", "large"],
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
      imgGroup: [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
      ],
      id: 4
    },
    {
      title: "Black denim jacket5",
      price: "99,18",
      disCountPrice: false,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      reviewCount: 2,
      review: 1,
      model: "Shirt 5407x",
      color: "Blue",
      delivery: "USA, Europe",
      size: ["small", "medium", "large"],
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
      imgGroup: [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
      ],
      id: 5
    }
  ]);

  return (
    <>
        <CssBaseline />

        <main>
          <Container className={classes.cardGrid}>
            <Grid item xs={12} className={classes.grid}>
                <Grid item xs={3}>
                    <a href="#!" className={classes.i}><i className="fas fa-th-list fa-lg " ></i></a>
                    <a href="#!" className={classes.i}><i className="fas fa-th-large fa-lg"></i></a>
                </Grid>
                <Typography>Label example</Typography>
                <Box>
                  <Button className={classes.button}><i class="fas fa-angle-left"></i></Button>
                  <Fab size='small' style={{backgroundColor: '#4285F4' , marginRight: '5px'}}>1</Fab>
                  <Fab size='small' style={{ marginRight: '5px'}}>2</Fab>
                  <Fab size='small' >3</Fab>
                  <Button className={classes.button}><i class="fas fa-angle-right"></i></Button>
                </Box>
            </Grid >
            <Grid container spacing={4}>
              <CardComponent cards={cards} />
            </Grid>
            <Grid item xs={12} className={classes.grid}>
                <Grid item xs={3}>
                    <a href="#!" className={classes.i}><i className="fas fa-th-list fa-lg " ></i></a>
                    <a href="#!" className={classes.i}><i className="fas fa-th-large fa-lg"></i></a>
                </Grid>
                <Typography>Label example</Typography>
                <Box>
                  <Button className={classes.button}><i class="fas fa-angle-left"></i></Button>
                  <Fab size='small' style={{backgroundColor: '#4285F4' , marginRight: '5px'}}>1</Fab>
                  <Fab size='small' style={{ marginRight: '5px'}}>2</Fab>
                  <Fab size='small' >3</Fab>
                  <Button className={classes.button}><i class="fas fa-angle-right"></i></Button>
                </Box>
            </Grid>
          </Container>
        </main>

    </>
  );
}

export default Cards;
