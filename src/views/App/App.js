import React from 'react';
import { Wrapper, Content, HeaderWrapper, WalletsWrapper } from './App.styles';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { menuItems, header } from './mock';
import Wallets from '../../components/Wallets';

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Sidebar menuItems={menuItems} />
        <Content>
          <HeaderWrapper>
            <Header title={header.title} subtitle={header.subtitle} />
          </HeaderWrapper>
          <WalletsWrapper>
            <Wallets />
          </WalletsWrapper>
        </Content>
      </Wrapper>
    );
  }
}

export default App;
