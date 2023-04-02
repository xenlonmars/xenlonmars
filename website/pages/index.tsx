import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

export default function Album() {
  return (
    <Box sx={{
      backgroundImage: "url(https://www.manufosela.es/shooting_stars/hori.png), url(https://www.manufosela.es/shooting_stars/stars_5.png)",
      backgroundRepeat: "repeat-x, repeat-x repeat-y",
      transform: "translate3D(0em, 0em, 0)",
    }}>
      <CssBaseline />
      <AppBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'transparent',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Xenlon Mars
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              For each DBXen Token burned, you receive 100,000,000 Xenlon Mars tokens
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button href="/mint" variant="contained">Mint</Button>
              {/* <Button variant="outlined">Buy</Button> */}
              <Button href="/leaderboard" variant="outlined">Leaderboard</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* leave blank */}
        </Container>
      </main>
      <Footer />
    </Box>
  );
}