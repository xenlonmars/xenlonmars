import { SwapWidget } from '@uniswap/widgets';
import { hooks } from '../connectors/metaMask';
import '@uniswap/widgets/fonts.css';

const jsonRpcEndpoint = 'https://mainnet.infura.io/v3/95c26ba5839642de9aa2e205d288fd68';
const { useProvider } = hooks;
const TREX = '0xB52d2497Cf9cB263D2bD3A2E980823d28D53C80b';
const tokenList = [
  {
    "name": "Dai Stablecoin",
    "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    "symbol": "DAI",
    "decimals": 18,
    "chainId": 1,
    "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
  },
  {
    "name": "Tether USD",
    "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    "symbol": "USDT",
    "decimals": 6,
    "chainId": 1,
    "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
  },
  {
    "name": "USD Coin",
    "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    "symbol": "USDC",
    "decimals": 6,
    "chainId": 1,
    "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
  },
  {
    "name": "T. Rex",
    "address": "0xB52d2497Cf9cB263D2bD3A2E980823d28D53C80b",
    "symbol": "TREX",
    "decimals": 18,
    "chainId": 1,
    "logoURI": "https://github.com/trexmoney/assets/raw/main/images/trex-token-logo.png"
  },
];

const UniswapWidget = () => {
  const provider = useProvider();
  return (
    <div className="Uniswap" style={{ width: '100%' }}>
      <SwapWidget
        // provider={provider}
        // jsonRpcEndpoint={jsonRpcEndpoint}
        // tokenList={tokenList}
        // defaultOutputTokenAddress={TREX}
        // width="100%"
      />
    </div>
  );
};

export default UniswapWidget;
