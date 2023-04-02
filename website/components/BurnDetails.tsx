import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function BurnDetails() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Burn details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="amountToBurn"
            name="amountToBurn"
            label="DXN amount to burn"
            fullWidth
            type="number"
            autoComplete="amount-to-burn"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}