import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Copyright from '../components/Copyright';
import Link from '../src/Link';

export default function Album() {
  return (<Box sx={{ p: 6 }} component="footer">
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
    <Grid sx={{ mt: 3 }} spacing={2} alignItems="center" justifyContent="center" container>
      <Grid item>
        <Link target="_blank" href="https://github.com/xenlonmars/xenlonmars">
          <GitHubIcon />
        </Link>
      </Grid>
      <Grid item>
        <Link target="_blank" href="https://twitter.com/xenlonmars">
          <TwitterIcon />
        </Link>
      </Grid>
    </Grid>
  </Box>
  );
}