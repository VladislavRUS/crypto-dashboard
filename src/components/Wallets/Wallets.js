import React from 'react';
import { Wrapper, Title, List, ListItem } from './Wallets.styles';
import Bitcoin from '../../components/Icons/Bitcoin';
import Wallet from '../Wallet';
import { generatePoints } from './mock';
import { TRENDS } from '../Wallet/Plot';
import ReactTimeout from 'react-timeout';

class Wallets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wallets: this.generateWallets()
    };
  }

  componentDidMount() {
    this.props.setInterval(() => {
      this.setState({
        wallets: this.generateWallets()
      });
    }, 1000);
  }

  generateWallets() {
    const bitcoin = {
      icon: <Bitcoin />,
      cost: 1.9678,
      currency: 'BTC',
      trend: 12.5,
      points: generatePoints(TRENDS.UP)
    };

    const etherium = {
      icon: <Bitcoin />,
      cost: 23.234,
      currency: 'ETH',
      trend: -5.23,
      points: generatePoints(TRENDS.DOWN)
    };

    const liteCoint = {
      icon: <Bitcoin />,
      cost: 380.567,
      currency: 'LTC',
      trend: 39.69,
      points: generatePoints(TRENDS.UP)
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
              <Wallet
                icon={wallet.icon}
                currency={wallet.currency}
                cost={wallet.cost}
                trend={wallet.trend}
                points={wallet.points}
              />
            </ListItem>
          ))}
        </List>
      </Wrapper>
    );
  }
}

export default ReactTimeout(Wallets);
