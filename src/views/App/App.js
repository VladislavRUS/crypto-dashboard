import React from 'react';
import { Wrapper, Content } from './App.styles';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { menuItems, header } from './mock';

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Sidebar menuItems={menuItems} />
        <Content>
          <Header title={header.title} subtitle={header.subtitle} />
        </Content>
      </Wrapper>
    );
  }
}

export default App;
