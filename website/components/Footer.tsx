import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import TokenIcon from '@mui/icons-material/Token';
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
      <Grid item>
        <Link target="_blank" href="https://etherscan.io/address/0x529608dcA34504Ab12cCc55Efb5bB091D0188500">
          <InsertDriveFileIcon />
        </Link>
      </Grid>
      <Grid item>
        <Link target="_blank" href="https://etherscan.io/token/0x36ff4DaE0E88113D68B1209e245B0e3Af92E9D58">
          <TokenIcon />
        </Link>
      </Grid>
    </Grid>
  </Box>
  );
}