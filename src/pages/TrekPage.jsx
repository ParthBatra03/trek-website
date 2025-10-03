import React from "react";
import {
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Rating,
    Chip,
    Button,
} from "@mui/material";
import { motion } from "framer-motion";

// Example data for 10 treks in Himachal & Uttarakhand
const TREKS = [
    { id: 1, name: "Triund", region: "Himachal", desc: "Short, scenic trek with great sunset views.", rating: 4.5, price: 1200, img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60" },
    { id: 2, name: "Kedarkantha", region: "Uttarakhand", desc: "Classic winter trek with snowy summit views.", rating: 4.8, price: 3800, img: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=60" },
    { id: 3, name: "Hampta Pass", region: "Himachal", desc: "A dramatic pass connecting lush valleys and barren lands.", rating: 4.6, price: 4200, img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60" },
    { id: 4, name: "Valley of Flowers", region: "Uttarakhand", desc: "Colourful alpine meadows, best in monsoon/post-monsoon.", rating: 4.7, price: 3000, img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60" },
    { id: 5, name: "Bhrigu Lake", region: "Himachal", desc: "Lakeside camping and starry night skies.", rating: 4.4, price: 2500, img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60" },
    { id: 6, name: "Roopkund", region: "Uttarakhand", desc: "High-altitude trail with an eerie glacial lake.", rating: 4.3, price: 5200, img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=60" },
    { id: 7, name: "Prashar Lake", region: "Himachal", desc: "Quiet lakeside trek with temple views.", rating: 4.2, price: 900, img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60" },
    { id: 8, name: "Har Ki Dun", region: "Uttarakhand", desc: "Alpine valley trek with ancient villages.", rating: 4.6, price: 3400, img: "https://images.unsplash.com/photo-1516569420161-6a8d5f5a6f12?auto=format&fit=crop&w=800&q=60" },
    { id: 9, name: "Chandrakhani", region: "Himachal", desc: "Panoramic ridge walk with sunrise views.", rating: 4.1, price: 1500, img: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=800&q=60" },
    { id: 10, name: "Kuari Pass", region: "Uttarakhand", desc: "Gentle high-altitude trek with Himalayan vistas.", rating: 4.5, price: 2999, img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60" },
];

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const cardVariants = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

export default function TreksPage() {
    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            sx={{ minHeight: "100vh", pb: 8, px: { xs: 2, md: 6 }, pt: 6, background: "linear-gradient(120deg, #ffd194 0%, #a8e6cf 40%, #90e0ef 100%)" }}
        >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 4 }}>
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>Treks — Himachal & Uttarakhand</Typography>
                    <Typography variant="subtitle1" color="text.secondaryfvuy76">Explore · Plan · Conquer</Typography>
                </Box>
                <Button variant="contained" sx={{ borderRadius: 4, textTransform: "none", boxShadow: '0 6px 20px rgba(0,0,0,0.12)' }}>Try AI Planner</Button>
            </Box>

            {/* Grid: each Grid item is set to display:flex so cards stretch to equal height */}
            <Grid container spacing={{ xs: 3, md: 4 }} component={motion.div} variants={containerVariants} initial="hidden" animate="show">
                {TREKS.map((t) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        key={t.id}
                        component={motion.div}
                        variants={cardVariants}
                        sx={{ display: "flex" }} // make the grid cell a flex container so child card can stretch
                    >
                        <motion.div whileHover={{ y: -8 }} whileTap={{ scale: 0.99 }} style={{ borderRadius: 16, overflow: "visible", width: "100%", height: "100%" }}>
                            {/* Card now uses flex layout and 100% height so all cards align */}
                            <Card
                                sx={{
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    boxShadow: "0 10px 30px rgba(16,24,40,0.08)",
                                    position: "relative",
                                    transition: "transform 0.25s, box-shadow 0.25s",
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(16,24,40,0.14)' },
                                }}
                            >
                                {/* Media: fixed height for consistent visuals */}
                                <CardMedia component="img" image={t.img} alt={t.name} sx={{ height: 180, objectFit: "cover" }} />

                                {/* floating rating bubble positioned relative to card (uses top offset instead of bottom so it doesn't overlap variable content) */}
                                <Box sx={{ position: "absolute", left: 16, top: 150, bgcolor: "background.paper", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}>
                                    <Typography variant="caption" sx={{ fontWeight: 800 }}>{t.rating}</Typography>
                                </Box>

                                {/* Content grows to fill available space so bottoms align */}
                                <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1, pt: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5, transition: "color 0.2s", '&:hover': { color: 'primary.main' } }}>{t.name}</Typography>

                                    {/* Keep description to 2 lines max to avoid uneven heights; use CSS line-clamp */}
                                    <Typography variant="body2" color="text.secondary" sx={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: 44 }}>{t.desc}</Typography>

                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 2, marginTop: 'auto' }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <Rating value={t.rating} readOnly size="small" precision={0.5} />
                                            <Typography variant="caption" color="text.secondary">({t.rating})</Typography>
                                        </Box>

                                        <Chip label={`₹${t.price}`} color="secondary" variant="filled" sx={{ fontWeight: 700 }} />
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
