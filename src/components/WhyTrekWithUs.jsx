import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Stack,
  Paper,
  Avatar,
  useTheme,
  useMediaQuery,
  SvgIcon,
} from "@mui/material";

/**
 * WhyTrekWithUsSection.jsx
 *
 * Fix applied: removed all imports from `@mui/icons-material` which caused Rollup/jsDelivr
 * bundling errors in sandboxed environments. Instead this component now defines lightweight
 * inline SVG icons using MUI's SvgIcon (part of @mui/material) so bundlers don't have to
 * resolve an extra package. This avoids the "Failed to bundle using Rollup" error.
 *
 * Keep using this file as before. If you still see bundling issues, the problem may be the
 * environment not having @mui/material available — confirm `@mui/material` is installed.
 *
 * Usage: import WhyTrekWithUsSection from './WhyTrekWithUsSection'; then <WhyTrekWithUsSection />
 */

// default hero image (replace with your own)
const heroImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80";

// quick theme gradient; change the string below to match your brand
const themeGradient =
  "linear-gradient(135deg, rgba(255,107,107,0.95) 0%, rgba(255,216,102,0.95) 50%, rgba(6,182,212,0.95) 100%)";

// --- Lightweight inline icons using SvgIcon (no external package imports) ---
const IconTerrain = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12 4l-8 12h6l2-3 2 3h6z" />
  </SvgIcon>
);

const IconCheck = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12 3.41 13.41 9 19l12-12L19.59 5.59z" />
  </SvgIcon>
);

const IconStar = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
  </SvgIcon>
);

const IconBackpack = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8v4H4v8h16v-8h-2V8zM8 8c0-2.21 1.79-4 4-4s4 1.79 4 4v1H8V8z" />
  </SvgIcon>
);

const IconHospital = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM13 17h-2v-4H7v-2h4V7h2v4h4v2h-4v4z" />
  </SvgIcon>
);

const IconEco = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12 2C7 7 4 9 4 13c0 5 4 7 8 7s8-2 8-7c0-4-3-6-8-11z" />
  </SvgIcon>
);

const IconSchedule = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 11h5v-2h-4V7h-2v6z" />
  </SvgIcon>
);

const IconCamera = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm8-2h-2.3l-1.6-2H8.9L7.3 5H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2zM12 15a3 3 0 110-6 3 3 0 010 6z" />
  </SvgIcon>
);

// --- PerkCard small component for reuse ---
function PerkCard({ IconComponent, title, children }) {
  return (
    <Paper sx={{ p: 2, borderRadius: 2, height: "100%" }} elevation={3}>
      <Stack spacing={1}>
        <Avatar sx={{ bgcolor: "rgba(255,255,255,0.08)", width: 48, height: 48 }}>
          <IconComponent />
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          {children}
        </Typography>
      </Stack>
    </Paper>
  );
}

export default function WhyTrekWithUsSection({ image = heroImage }) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 6 },
        background: themeGradient,
        color: "common.white",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="flex-start"
        justifyContent="center"
        sx={{ maxWidth: 1200, mx: "auto" }}
      >
        {/* TEXT / CONTENT */}
        <Grid item xs={12} md={6}>
          <Box sx={{ pr: { md: 4 } }}>
            <Paper
              elevation={0}
              sx={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: 3,
                p: { xs: 3, md: 4 },
                backdropFilter: "blur(6px)",
              }}
            >
              <Stack spacing={2}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar sx={{ bgcolor: "rgba(255,255,255,0.12)", width: 44, height: 44 }}>
                    <IconTerrain sx={{ color: "white" }} />
                  </Avatar>
                  <Typography variant="overline" sx={{ opacity: 0.95 }}>
                    Why trek with us
                  </Typography>
                </Stack>

                <Typography variant={isMdUp ? "h4" : "h5"} sx={{ fontWeight: 800 }}>
                  Trails that test you. Guides who make it worth the climb.
                </Typography>

                <Typography variant="body1" sx={{ opacity: 0.95 }}>
                  We design experiences that balance challenge and comfort. Local guides, low-impact routes,
                  reliable logistics — so you focus on the summit, not the small print.
                </Typography>

                {/* Expanded perks list */}
                <Grid container spacing={1} sx={{ mt: 1 }}>
                  <Grid item xs={12} sm={6}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <IconCheck />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                          Safety first
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.9 }}>
                          Certified guides & rescue-ready plans
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <IconStar />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                          Highly rated
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.9 }}>
                          4.9 average from real trekkers
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <IconBackpack />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                          Free gear rental
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.9 }}>
                          Backpacks, poles and basic camping kit available
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <IconHospital />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                          First aid & evacuation
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.9 }}>
                          Trained medics on long treks
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <IconEco />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                          Eco-friendly
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.9 }}>
                          Leave-no-trace, local community support
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <IconSchedule />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                          Flexible dates
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.9 }}>
                          Weekends or weekdays — we adapt
                        </Typography>
                      </Box>
                    </Stack>       
                  </Grid>
                </Grid>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      borderRadius: 2,
                      textTransform: "none",
                      boxShadow: "0 8px 28px rgba(0,0,0,0.2)",
                    }}
                  >
                    Explore Trails
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderRadius: 2,
                      color: "common.white",
                      borderColor: "rgba(255,255,255,0.28)",
                      textTransform: "none",
                    }}
                  >
                    Contact Guide
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          </Box>
        </Grid>

        {/* IMAGE */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 6,
              transform: "translateY(0)",
              transition: "transform 350ms ease",
              '&:hover': { transform: 'translateY(-6px)' },
            }}
          >
            <Box
              component="img"
              src={image}
              alt="People trekking on a scenic trail"
              sx={{
                width: "100%",
                display: "block",
                height: { xs: 260, sm: 320, md: 420 },
                 

                objectFit: "cover",
              }}
            />
          </Box>4

          <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap" }}>
            <Paper
              elevation={3}
              sx={{ display: "flex", gap: 1, alignItems: "center", p: 1, borderRadius: 2, mr: 1, mb: 1 }}
            >
              {/* <Avatar sx={{ width: 36, height: 36 }}>A</Avatar> */}
              {/* <Box>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  Guided by locals
                </Typography>
                <Typography variant="caption">Pack knowledge, not just snacks</Typography>
              </Box> */}
            </Paper>

            {/* <Paper elevation={3} sx={{ display: "flex", gap: 1, alignItems: "center", p: 1, borderRadius: 2, mr: 1, mb: 1 }}>
              <Avatar sx={{ width: 36, height: 36 }}>S</Avatar>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  Small groups
                </Typography>
                <Typography variant="caption">Max 12 per trek for better experience</Typography>
              </Box>
            </Paper> */}

            {/* <Paper elevation={3} sx={{ display: "flex", gap: 1, alignItems: "center", p: 1, borderRadius: 2, mr: 1, mb: 1 }}>
              <Avatar sx={{ width: 36, height: 36 }}>
                <IconCamera />
              </Avatar>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  Photographer on demand
                </Typography>
                <Typography variant="caption">Capture the summit, we’ll handle the angles</Typography>
              </Box>
            </Paper> */}
          </Stack>

          {/* Additional cards below the image */}
          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6} md={4}>
              <PerkCard IconComponent={IconBackpack} title="Free Gear Rental">
                {/* Backpacks, trekking poles and basic camping gear available at no extra charge. */}
              </PerkCard>
            </Grid>

            {/* <Grid item xs={12} sm={6} md={4}>
              <PerkCard IconComponent={IconHospital} title="Trained Medics">
                Medics accompany longer treks; AED and stocked first-aid kits included.
              </PerkCard>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <PerkCard IconComponent={IconEco} title="Eco-conscious">
                We follow leave-no-trace practices and support village initiatives on every route.
              </PerkCard>

            </Grid> */}

            {/* <Grid item xs={12} sm={6} md={4}>
              <PerkCard IconComponent={IconSchedule} title="Flexible Dates">
                Weekend plans or weekday escapes — book when it suits you.
              </PerkCard>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <PerkCard IconComponent={IconCamera} title="Photography Add-on">
                Professional shooter can join your trek on request to capture the journey.
              </PerkCard>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <PerkCard IconComponent={IconCheck} title="Small Groups">
                We cap group size to keep the experience personal and safe.
              </PerkCard>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
