import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppBar from '../components/AppBar';
import Copyright from '../components/Copyright';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
              <Button disabled variant="outlined">Buy</Button>
              <Button href="/leaderboard" variant="outlined">Leaderboard</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* leave blank */}
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Conquer the Xenverse
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Only for those without limits
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </Box>
  );
}