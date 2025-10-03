import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  Snackbar,
  Alert,
  useTheme,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";

export default function ContactPage() {
  const theme = useTheme();
  const [result, setResult] = React.useState("");
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [isSending, setIsSending] = React.useState(false);
  const [severity, setSeverity] = React.useState("success");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setIsSending(true);
    setSnackOpen(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "228b234c-d73a-45cc-9af9-1292411e73d0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // try to parse JSON safely
      const data = await response.json();

      if (data && data.success) {
        setResult("Form Submitted Successfully");
        setSeverity("success");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult((data && data.message) || "Submission failed");
        setSeverity("error");
      }
    } catch (err) {
      console.error(err);
      setResult("Network error");
      setSeverity("error");
    }

    setIsSending(false);
    setSnackOpen(true);
  };

  return (
    <Box
      sx={{
        p: { xs: 2, md: 6 },
        background: `linear-gradient(180deg, ${theme.palette.mode === 'light' ? '#f0f7ff' : '#071224'} 0%, ${theme.palette.background.default} 100%)`,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={9}
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 4,
          maxWidth: 1100,
          mx: "auto",
          width: "100%",
          overflow: "hidden",
          animation: `float 8s ease-in-out infinite`,
          '@keyframes float': {
            '0%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-6px)' },
            '100%': { transform: 'translateY(0px)' },
          },
          background: `linear-gradient(135deg, rgba(255,255,255,0.95), rgba(245,250,255,0.6))`,
        }}
      >
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 800, background: 'linear-gradient(90deg,#0ea5e9,#7c3aed)', WebkitBackgroundClip: 'text', color: 'transparent' }}
            >
              Contact Us
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Want to talk about a project, a bug, or the weather? Leave a message and Parth will get back to you — usually before the coffee runs out.
            </Typography>

            <Box component="form" onSubmit={onSubmit} noValidate>
              <TextField
                name="name"
                label="Your name"
                fullWidth
                margin="normal"
                required
                InputProps={{ sx: { transition: 'all .25s ease', '&:focus-within': { boxShadow: '0 6px 20px rgba(14,165,233,0.12)' } } }}
              />

              <TextField
                name="email"
                label="Your email"
                type="email"
                fullWidth
                margin="normal"
                required
                helperText="We won't spam you. Promise."
                InputProps={{ sx: { transition: 'all .25s ease' } }}
              />

              <TextField
                name="message"
                label="Message"
                fullWidth
                margin="normal"
                required
                multiline
                rows={6}
                placeholder="Tell Parth what's up — be specific."
                InputProps={{ sx: { transition: 'all .25s ease' } }}
              />

              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  disabled={isSending}
                  sx={{
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    background: 'linear-gradient(90deg,#06b6d4,#3b82f6)',
                    boxShadow: '0 8px 30px rgba(59,130,246,0.18)',
                    transition: 'transform .18s ease, box-shadow .18s ease',
                    '&:hover': { transform: 'translateY(-3px)' },
                  }}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </Button>

                <Button
                  variant="outlined"
                  onClick={() => {
                    // quick email action
                    window.location.href = 'mailto:parthbatra36@gmail.com';
                  }}
                  sx={{ textTransform: 'none' }}
                >
                  <EmailIcon sx={{ mr: 1 }} /> Email Parth
                </Button>
              </Box>

              {/* <Typography variant="caption" display="block" sx={{ mt: 2, color: 'text.secondary' }}>
                Messages are sent through Web3Forms. If you want attachments, or to store submissions in a DB, I can wire that up.
              </Typography> */}
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'linear-gradient(180deg, rgba(59,130,246,0.06), rgba(99,102,241,0.02))',
              }}
            >
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar
                    sx={{
                      width: 72,
                      height: 72,
                      bgcolor: '#0ea5e9',
                      fontWeight: 700,
                      boxShadow: '0 8px 30px rgba(14,165,233,0.18)',
                      transformOrigin: 'center',
                      animation: 'pulse 2.5s ease-in-out infinite',
                      '@keyframes pulse': {
                        '0%': { transform: 'scale(1)' },
                        '50%': { transform: 'scale(1.06)' },
                        '100%': { transform: 'scale(1)' },
                      },
                    }}
                  >
                    PB
                  </Avatar>

                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      PARTH BATRA
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Frontend wizard. Will handle your UI tantrums.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <PhoneIcon fontSize="small" />
                  <Typography variant="body1">
                    <Link href="tel:9873806181" underline="none">9873806181</Link>
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <EmailIcon fontSize="small" />
                  <Typography variant="body1">
                    <Link href="mailto:parthbatra36@gmail.com" underline="none">parthbatra36@gmail.com</Link>
                  </Typography>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle2" color="text.secondary">Office hours</Typography>
                  <Typography variant="body2">Mon - Fri: 10:00 — 18:00</Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                  Quick actions
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button size="small" variant="outlined" href="mailto:parthbatra36@gmail.com" startIcon={<EmailIcon />} sx={{ textTransform: 'none' }}>
                    Email
                  </Button>
                  <Button size="small" variant="outlined" href="tel:9873806181" startIcon={<PhoneIcon />} sx={{ textTransform: 'none' }}>
                    Call
                  </Button>
                </Box>
              </Box>
            </Paper>

            <Paper elevation={0} sx={{ mt: 2, p: 2, borderRadius: 2, background: 'rgba(20,40,80,0.03)' }}>
              {/* <Typography variant="body2" color="text.secondary">
                Prefer code to humans? Paste this into your app router or a page: <code>import ContactPage from '\components/ContactPage';</code>
              </Typography> */}
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      <Snackbar
        open={snackOpen}
        autoHideDuration={4500}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackOpen(false)} severity={severity} sx={{ width: '100%' }}>
          {result}
        </Alert>
      </Snackbar>
    </Box>
  );
}
