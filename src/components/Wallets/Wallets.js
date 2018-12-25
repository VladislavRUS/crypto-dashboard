import React from 'react';
import { Wrapper, Title, List, ListItem } from './Wallets.styles';
import Bitcoin from '../../components/Icons/Bitcoin';
import Etherium from '../Icons/Etherium';
import Litecoin from '../Icons/Litecoin';
import Wallet from '../Wallet';

class Wallets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wallets: this.generateWallets()
    };
  }

  generateWallets() {
    const bitcoin = {
      icon: <Bitcoin />,
      currency: 'BTC'
    };

    const etherium = {
      icon: <Etherium />,
      currency: 'ETH'
    };

    const liteCoint = {
      icon: <Litecoin />,
      currency: 'LTC'
    };

    return [bitcoin, etherium, liteCoint];
  }

  render() {
    const { wallets } = this.state;

    return (
      <Wrapper>
        <Title>Wallets</Title>
        <List>
          {wallets.map(wallet => (
            <ListItem key={wallet.currency}>
              <Wallet icon={wallet.icon} currency={wallet.currency} />
            </ListItem>
          ))}
        </List>
      </Wrapper>
    );
  }
}

export default Wallets;
