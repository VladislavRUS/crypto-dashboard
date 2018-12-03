import dashboard from '../../assets/icons/dashboard.png';
import wallet from '../../assets/icons/wallet.png';
import messages from '../../assets/icons/messages.png';
import trade from '../../assets/icons/trade.png';
import accountSetting from '../../assets/icons/accountSetting.png';

const menuItems = [
  {
    name: 'Dashboard',
    icon: dashboard
  },
  {
    name: 'Waller',
    icon: wallet
  },
  {
    name: 'Messages',
    icon: messages
  },
  {
    name: 'Trade',
    icon: trade
  },
  {
    name: 'Account Setting',
    icon: accountSetting
  }
];

const header = {
  title: 'Dashboard',
  subtitle: 'With all of the styling tool options available in today’s market'
};

export { menuItems, header };
