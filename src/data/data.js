// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';

// const CardsData = () => {

//     const [cards, setCards] = useState()

//     useEffect(() => {

//         fetch('https://fakestoreapi.com/products')
//             .then(res => res.json())
//             .then(json => {

//                 setCards(json.map(el => {

//                     return {
//                         title: el.title,
//                         price: el.price,
//                         image: el.image,
//                         id: el.id
//                     }

//                 }))

//             }).catch(err => {
//                 console.log(err);
//             })
//     }, [])

// };

// export default CardsData;