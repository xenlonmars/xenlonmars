import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      <Link color="inherit" href="https://www.xenlonmars.com/">
        Xenlon Mars
      </Link>{'. '}
      Fair crypto principles.{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}