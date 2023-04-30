import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import Table from '../components/Table';
import { useWeb3React } from '@web3-react/core';
import { Contract, ethers } from 'ethers';
import { BigNumber } from '@ethersproject/bignumber';
import addresses from '../constants/addresses';
import XenlonMarsAbi from '../abis/XenlonMars.json';

function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="This week" />
        <Tab label="Last week" />
        <Tab label="All time" />
      </Tabs>
    </Box>
  );
}

export default function Album() {
  const { provider, account } = useWeb3React();
  const signerOrProvider: any = React.useMemo(() => {
    if (provider?.['getSigner']) {
      return provider.getSigner();
    } else {
      return provider;
    }
  }, [provider]);
  const xenlonMars: any = new Contract(addresses.ETHEREUM_MAINNET.XENLONMARS, XenlonMarsAbi, signerOrProvider);

  (async () => {
    // const timestamps = [];
    // const burns = [];
    // const thisWeek = [];
    // for (let i = 0; i < 2; i++) {
    //   const ts = await xenlonMars.burnTimestamps(i);
    //   timestamps.push(ts);
    //   const burn = await xenlonMars.burnsByTimestamp(ts);
    //   burns.push(burn);
    //   // this week
    //   const d = new Date();
    //   d.setDate(d.getDate() - 7);
    //   const a = new Date(ts.toString() * 1000);
    //   if (a > d) {
    //     thisWeek.push(burn);
    //   }
    // }

    // last week

    // all time
  })();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'transparent',
            pt: 8,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Leaderboard
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Check stats on weekly or all time burns
            </Typography>
            <CenteredTabs />
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Table />
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}