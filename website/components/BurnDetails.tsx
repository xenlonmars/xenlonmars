import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core';

export default function BurnDetails() {
  const { connector } = useWeb3React();
  console.log(connector)

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