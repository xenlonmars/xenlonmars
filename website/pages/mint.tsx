import * as React from 'react';
import { useEffect, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BurnDetails from '../components/BurnDetails';
import Review from '../components/Review';
import AppBar from '../components/AppBar';
import Copyright from '../components/Copyright';
import Snackbar from '@mui/material/Snackbar';
import { useWeb3React } from '@web3-react/core';
import { Contract, ethers } from 'ethers';
import addresses from '../../constants/addresses';
import XenlonMarsAbi from '../../abis/XenlonMars.json';
import DBXenERC20Abi from '../../abis/DBXenERC20.json';

const steps = ['Burn details', 'Mint XLON'];

function getStepContent(step: number, amountToBurn: any, setAmountToBurn: any) {
  switch (step) {
    case 0:
      return <BurnDetails setAmountToBurn={setAmountToBurn} />;
    case 1:
      return <Review amountToBurn={amountToBurn} />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [alertMessage, setAlertMessage] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const [amountToBurn, setAmountToBurn] = React.useState(0);
  const { provider, account } = useWeb3React();
  const signerOrProvider: any = useMemo(() => {
    if (provider?.['getSigner']) {
      return provider.getSigner();
    } else {
      return provider;
    }
  }, [provider]);
  const xenlonMars: any = new Contract(addresses.ETHEREUM_MAINNET.XENLONMARS, XenlonMarsAbi, signerOrProvider);
  const dxn: any = new Contract(addresses.ETHEREUM_MAINNET.DXN, DBXenERC20Abi, signerOrProvider);

  const handleNext = async () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(() => {
    if (activeStep === steps.length) {
      (async function () {
        try {
          const allowed = await dxn.allowance(account, addresses.ETHEREUM_MAINNET.XENLONMARS);
          if (allowed <= 0) {
            const tx = await dxn.approve(addresses.ETHEREUM_MAINNET.XENLONMARS, ethers.MaxUint256);
            (setAlertMessage as any)("please wait");
            await (provider as any).waitForTransaction(tx.hash);
            setAlertMessage(null);
          }
          (setAlertMessage as any)("unused gas will be returned to you");
          const tx = await xenlonMars.burn(ethers.parseEther(amountToBurn.toString()), {
            gasLimit: 500000
          });
          await (provider as any).waitForTransaction(tx.hash);
          setAlertMessage(null);
        } catch (err: any) {
          console.error(err);
          setAlertMessage(err.message);
          setTimeout(() => setAlertMessage(null), 4000);
        }
      })();
    }
  }, [activeStep]);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <Snackbar
        open={!!alertMessage}
        autoHideDuration={6000}
        message={alertMessage}
      />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Mint
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Your XLON is on the way.
              </Typography>
              <Typography variant="subtitle1">
                Check your wallet and confirm to burn your DXN tokens in order to receive your new XLON tokens.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, amountToBurn, setAmountToBurn)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={amountToBurn < 0}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Mint' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}