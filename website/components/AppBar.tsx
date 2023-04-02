import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function MainAppBar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Avatar sx={{ mr: 2 }} src="/logo.png"></Avatar>
        <Typography variant="h6" color="inherit" noWrap>
          Xenlon Mars
        </Typography>
      </Toolbar>
    </AppBar>
  );
}