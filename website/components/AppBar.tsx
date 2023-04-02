import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '../src/Link';

export default function MainAppBar() {
  return (
    <AppBar elevation={0} position="relative">
      <Link underline="none" href="/">
        <Toolbar>
          <Avatar sx={{ mr: 2 }} src="/logo.png"></Avatar>
          <Typography variant="h6" color="inherit" noWrap>
            Xenlon Mars
          </Typography>
        </Toolbar>
      </Link>
    </AppBar>
  );
}