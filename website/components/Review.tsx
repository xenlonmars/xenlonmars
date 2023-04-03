import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { numberWithCommas } from '../utils';

export default function Review(props: any) {
  const { amountToBurn } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="XLON" secondary="New tokens mint" />
          <Typography variant="body2">{numberWithCommas(amountToBurn * 100000000)}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total cost by burn" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {numberWithCommas(amountToBurn)} DXN
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}