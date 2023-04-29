import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import UniswapWidget from '../components/UniswapWidget';

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
              For each DBXen Token burned, you receive 100,000,000 XLON tokens
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button href="/mint" variant="contained">Mint</Button>
              <Button href="/leaderboard" variant="outlined">Leaderboard</Button>
            </Stack>
            <Grid justifyContent="center" alignItems="center" container>
              <Grid item>
                <UniswapWidget />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
      <Footer />
    </Box>
  );
}