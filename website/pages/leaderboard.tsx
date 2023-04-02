import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '../components/AppBar';
import Copyright from '../components/Copyright';
import Table from '../components/Table';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="This week" />
        <Tab label="Last week" />
        <Tab label="All time" />
      </Tabs>
    </Box>
  );
}

export default function Album() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'transparent',
            pt: 8,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Leaderboard
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Check stats on weekly or all time burns
            </Typography>
            <CenteredTabs />
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Table />
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
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
    </React.Fragment>
  );
}