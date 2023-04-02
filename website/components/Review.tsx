import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useWeb3React } from '@web3-react/core';

const products = [
  {
    name: 'XLON',
    desc: 'New tokens mint',
    price: '100,000,000',
  },
];

export default function Review() {
  const { connector } = useWeb3React();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total cost by burn" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            1 DXN
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}