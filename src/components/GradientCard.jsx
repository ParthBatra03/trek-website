// import React from 'react';
// import Box from '@mui/material/Box';
// import GradientCard from './GradientCard'; // Make sure the path is correct

// function CardGrid() {
//   const cardData = [
//     {
//       id: 1,
//       name: "Product 1",
//       image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1740&auto=format&fit=crop",
//       description: "A sleek and comfortable athletic shoe designed for running and everyday wear.",
//       rating: 4.5,
//       gradient: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       image: "https://images.unsplash.com/photo-1544465495-2a628b80b740?q=80&w=1740&auto=format&fit=crop",
//       description: "A professional laptop for all your work and creative needs, with a long-lasting battery.",
//       rating: 5,
//       gradient: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       image: "https://images.unsplash.com/photo-1563725586618-62a265147854?q=80&w=1740&auto=format&fit=crop",
//       description: "A high-quality camera for capturing stunning photos and cinematic videos.",
//       rating: 4,
//       gradient: "linear-gradient(45deg, #1A2980 30%, #26D0CE 90%)",
//     },
//     {
//       id: 4,
//       name: "Product 4",
//       image: "https://images.unsplash.com/photo-1596773539828-569b9101f353?q=80&w=1740&auto=format&fit=crop",
//       description: "Stylish and comfortable headphones with noise-canceling technology.",
//       rating: 3.5,
//       gradient: "linear-gradient(45deg, #FFD700 30%, #FFA07A 90%)",
//     },
//   ];

//   return (
//     <Box 
//       sx={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//         padding: 4,
//       }}
//     >
//       {cardData.map((card) => (
//         <GradientCard
//           key={card.id}
//           productName={card.name}
//           imageUrl={card.image}
//           description={card.description}
//           rating={card.rating}
//           gradient={card.gradient}
//         />
//       ))}
//     </Box>
//   );
// }

// export default CardGrid;