import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useWeb3React } from '@web3-react/core';

export default function Review(props: any) {
  const { amountToBurn } = props;
  const { connector } = useWeb3React();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="XLON" secondary="New tokens mint" />
          <Typography variant="body2">{amountToBurn * 100000000}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total cost by burn" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {amountToBurn} DXN
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}