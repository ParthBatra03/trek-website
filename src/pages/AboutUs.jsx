import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Avatar,
  Chip,
  Stack,
} from "@mui/material";
import TerrainIcon from "@mui/icons-material/Terrain";
import HikingIcon from "@mui/icons-material/DirectionsWalk";
import MapIcon from "@mui/icons-material/Map";
import StarIcon from "@mui/icons-material/Star";

export default function AboutPage() {
  return (
    <Box sx={{ background: 'linear-gradient(180deg, #f7fbff 0%, #fff 100%)', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero */}
        <Paper
          elevation={6}
          sx={{
            display: 'flex',
            gap: { xs: 2, md: 6 },
            alignItems: 'center',
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(14,165,233,0.06), rgba(124,58,237,0.02))',
            mb: 6,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                background: 'linear-gradient(90deg,#0ea5e9,#7c3aed)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 2,
                letterSpacing: '-0.5px',
              }}
            >
              We Live for the Trails
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
              Trekking, community and responsibly exploring the wild. We design trips for first timers and seasoned hikers alike — stunning views guaranteed.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                sx={{
                  textTransform: 'none',
                  px: 4,
                  py: 1.25,
                  background: 'linear-gradient(90deg,#06b6d4,#3b82f6)',
                  boxShadow: '0 10px 30px rgba(59,130,246,0.18)',
                  transform: 'translateY(0)',
                  transition: 'transform .18s ease',
                  '&:hover': { transform: 'translateY(-4px)' },
                }}
                href="/contact"
              >
                Join a Trek
              </Button>

              <Button
                variant="outlined"
                sx={{ textTransform: 'none', px: 4, py: 1.25 }}
                href="/treks"
              >
                Explore Treks
              </Button>
            </Stack>

            <Box sx={{ mt: 4, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip icon={<TerrainIcon />} label="Eco-friendly" variant="outlined" sx={{ mr: 1 }} />
              <Chip icon={<HikingIcon />} label="Guided Hikes" variant="outlined" sx={{ mr: 1 }} />
              <Chip icon={<MapIcon />} label="Custom Routes" variant="outlined" />
            </Box>
          </Box>

          <Box sx={{ width: { xs: 150, md: 360 }, flexShrink: 0 }}>
            {/* Use an attractive trekking image. Replace URL with your own if needed. */}
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=60"
              alt="trekking"
              sx={{
                width: '100%',
                height: { xs: 120, md: 260 },
                objectFit: 'cover',
                borderRadius: 3,
                boxShadow: '0 20px 50px rgba(2,6,23,0.12)',
                transform: 'translateY(0)',
                transition: 'transform .6s cubic-bezier(.2,.9,.2,1)',
                '&:hover': { transform: 'translateY(-12px) rotate(-1deg) scale(1.02)' },
              }}
            />
          </Box>
        </Paper>

        {/* Mission + Stats */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
                Our Mission
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Make mountain trails accessible, safe, and respectful to local communities and the environment. We train local guides, use low-impact camping practices, and partner with conservation groups to preserve the wild places we love.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {[
                { label: 'Treks completed', value: '1,250+' },
                { label: 'Happy trekkers', value: '9,800+' },
                { label: 'Conservation hours', value: '4,300+' },
              ].map((stat) => (
                <Grid item xs={12} sm={4} key={stat.label}>
                  <Paper
                    elevation={2}
                    sx={{ p: 3, borderRadius: 2, textAlign: 'center', background: 'linear-gradient(180deg, #fff, rgba(14,165,233,0.02))' }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Team */}
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>
          Meet the Team
        </Typography>

        <Grid container spacing={3}>
          {[
            { name: 'Asha Sharma', role: 'Lead Guide', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
            { name: 'Rohit Verma', role: 'Expedition Lead', avatar: 'https://randomuser.me/api/portraits/men/65.jpg' },
            { name: 'Maya Singh', role: 'Community Liaison', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
          ].map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: '100%',
                  transition: 'transform .28s ease, box-shadow .28s ease',
                  '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 18px 40px rgba(2,6,23,0.12)' },
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar src={member.avatar} sx={{ width: 64, height: 64 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 800 }}>{member.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.role}
                    </Typography>
                  </Box>
                </Stack>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  Loves early-morning ascents and masala chai. Reliable, experienced, and ridiculously fond of maps.
                </Typography>

                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Button size="small" variant="outlined" startIcon={<StarIcon />} sx={{ textTransform: 'none' }}>
                    View Profile
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Footer CTA */}
        <Paper elevation={4} sx={{ p: 4, mt: 6, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              Ready to start your next adventure?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Join a group, or plan a private trek with one of our leaders.
            </Typography>
          </Box>

          <Box>
            <Button variant="contained" href="/contact" sx={{ textTransform: 'none', px: 4 }}>
              Contact Us
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
