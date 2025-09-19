// // src/components/HomeSixCards.jsx
// import React from "react";
// import {
//   Box,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Typography,
//   Button,
//   Rating,
//   Container,
// } from "@mui/material";

// const TREKS = [
//   // Your data here...
//   { id: 1, name: "Kedarkantha", desc: "Snowy ridges, pine forests and unforgettable sunrise vistas.", rating: 4.8, reviews: 342, img: "/assets/kedarkantha.jpg", fallback: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60" },
//   { id: 2, name: "Triund", desc: "Short, scenic route — perfect for quick getaways.", rating: 4.6, reviews: 280, img: "/assets/triund.jpg", fallback: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60" },
//   { id: 3, name: "Paradhar Lake", desc: "Calm alpine lake, mirror-like reflections and peace.", rating: 4.7, reviews: 198, img: "/assets/paradhar.jpg", fallback: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=60" },
//   { id: 4, name: "Bir Billing", desc: "Paragliding capital with valley panoramas that dominate your camera roll.", rating: 4.9, reviews: 410, img: "/assets/bir-billing.jpg", fallback: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=60" },
//   { id: 5, name: "Hampta Pass", desc: "High mountain pass, wildflowers and dramatic valley drops.", rating: 4.7, reviews: 156, img: "/assets/hampta.jpg", fallback: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60" },
//   { id: 6, name: "Kheerganga", desc: "Hot springs, starlit camps and a friendly uphill struggle.", rating: 4.5, reviews: 220, img: "/assets/kheerganga.jpg", fallback: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60" },
// ];

// export default function HomeSixCards() {
//   return (
//     <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
//       <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
//         Popular Treks
//       </Typography>

//       <Grid container spacing={3} alignItems="stretch">
//         {TREKS.map((t) => (
//           <Grid
//             item
//             key={t.id}
//             xs={12} // Start with a full-width card on the smallest screen
//             sm={6} // Two cards per row on small screens
//             md={4} // Three cards per row on desktop
//             sx={{ display: "flex" }} // Ensures cards in the same row have equal height
//           >
//             <Card
//               elevation={3}
//               sx={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column", // This is the key change
//                 borderRadius: 2,
//                 transition: "transform 220ms ease, box-shadow 220ms ease",
//                 "&:hover": {
//                   transform: "translateY(-8px)",
//                   boxShadow: "0 18px 50px rgba(15,15,15,0.12)",
//                 },
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 image={t.img}
//                 alt={t.name}
//                 onError={(e) => {
//                   e.currentTarget.onerror = null;
//                   e.currentTarget.src = t.fallback;
//                 }}
//                 sx={{
//                   height: { xs: 140, sm: 160, md: 180 },
//                   objectFit: "cover",
//                 }}
//               />

//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
//                   {t.name}
//                 </Typography>

//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{
//                     mt: 1,
//                     mb: 2,
//                     display: "-webkit-box",
//                     WebkitLineClamp: 3,
//                     WebkitBoxOrient: "vertical",
//                     overflow: "hidden",
//                   }}
//                 >
//                   {t.desc}
//                 </Typography>

//                 <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                   <Rating value={t.rating} precision={0.1} readOnly size="small" />
//                   <Typography variant="caption" color="text.secondary">
//                     {t.rating} • {t.reviews} reviews
//                   </Typography>
//                 </Box>
//               </CardContent>

//               <CardActions sx={{ px: 2, pb: 2, marginTop: "auto" }}>
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   size="small"
//                   sx={{ textTransform: "none", fontWeight: 700 }}
//                 >
//                   Explore more
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }