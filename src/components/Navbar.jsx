// src/components/Navbar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { title: "Home", to: "/" },
  { title: "Treks", to: "/treks" },
  { title: "AI Planner", to: "/ai-planner" },
  { title: "About", to: "/about" },
  { title: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <AppBar
        position="sticky"
        elevation={4}
        sx={{
          background:
            "linear-gradient(90deg, #0f9d58 0%, #34a853 50%, #81c784 100%)",
          color: "white",
          backdropFilter: "saturate(140%) blur(4px)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          {/* Brand */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Avatar sx={{ bgcolor: "rgba(255,255,255,0.12)" }}>TA</Avatar>
            <Box sx={{ lineHeight: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 16 }}>Trekking Adventures</Typography>
              <Typography sx={{ fontSize: 11, opacity: 0.95 }}>Explore • Plan • Conquer</Typography>
            </Box>
          </Box>

          {/* Desktop links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.title}
                component={RouterLink}
                to={item.to}
                disableRipple
                sx={{
                  textTransform: "none",
                  px: 2,
                  py: 0.8,
                  borderRadius: 2,
                  fontWeight: isActive(item.to) ? 700 : 600,
                  color: isActive(item.to) ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.95)",
                  background: isActive(item.to) ? "rgba(255,255,255,0.06)" : "transparent",
                  transition: "transform 180ms ease, box-shadow 180ms ease, background 180ms",
                  "&:hover": {
                    transform: "translateY(-4px) scale(1.02)",
                    boxShadow: "0 10px 26px rgba(11,95,58,0.12)",
                    background: "rgba(255,255,255,0.06)",
                  },
                }}
              >
                {item.title}
              </Button>
            ))}

            {/* CTA */}
            <Button
              component={RouterLink}
              to="/ai-planner"
              variant="contained"
              sx={{
                ml: 1.5,
                textTransform: "none",
                fontWeight: 800,
                background: "linear-gradient(90deg,#ffffff 0%, #f7f7f7 100%)",
                color: "#0b5f3a",
                borderRadius: 2,
                px: 2,
                py: 0.9,
                boxShadow: "0 8px 20px rgba(11,95,58,0.12)",
                "&:hover": { transform: "translateY(-3px)", boxShadow: "0 10px 28px rgba(11,95,58,0.16)" },
              }}
            >
              Try AI Planner
            </Button>
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "white",
              "&:hover": { bgcolor: "rgba(255,255,255,0.04)", transform: "scale(1.05)" },
            }}
            aria-label="open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 300,
            height: "100%",
            background: "linear-gradient(180deg,#0f9d58 0%, #34a853 100%)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            pb: 2,
          }}
          role="presentation"
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar sx={{ bgcolor: "rgba(255,255,255,0.12)" }}>TA</Avatar>
              <Box>
                <Typography sx={{ fontWeight: 800 }}>Trekking Adventures</Typography>
                <Typography sx={{ fontSize: 12, opacity: 0.95 }}>Explore • Plan • Conquer</Typography>
              </Box>
            </Box>

            <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }} aria-label="close menu">
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ mt: 1, px: 1 }}>
            {NAV_ITEMS.map((item) => (
              <ListItemButton
                key={item.title}
                component={RouterLink}
                to={item.to}
                onClick={() => setOpen(false)}
                sx={{
                  mb: 0.7,
                  borderRadius: 1.5,
                  color: isActive(item.to) ? "white" : "rgba(255,255,255,0.95)",
                  background: isActive(item.to) ? "rgba(255,255,255,0.06)" : "transparent",
                  transition: "transform 160ms ease, background 160ms ease",
                  "&:hover": { transform: "translateY(-3px)", background: "rgba(255,255,255,0.06)" },
                }}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
            ))}
          </List>

          <Box sx={{ px: 2, mt: "auto" }}>
            <Button
              fullWidth
              component={RouterLink}
              to="/ai-planner"
              onClick={() => setOpen(false)}
              sx={{
                mb: 1.2,
                textTransform: "none",
                fontWeight: 800,
                background: "white",
                color: "#0b5f3a",
                borderRadius: 1.2,
                py: 1,
                "&:hover": { transform: "translateY(-3px)", boxShadow: "0 10px 22px rgba(0,0,0,0.12)" },
              }}
            >
              Try AI Planner
            </Button>

            <Typography variant="caption" sx={{ opacity: 0.95 }}>
              © {new Date().getFullYear()} Trekking Adventures
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
