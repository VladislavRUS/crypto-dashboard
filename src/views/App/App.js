import React from 'react';
import { Wrapper } from './App.styles';
import Sidebar from '../../components/Sidebar';
import { menuItems } from './mock';

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Sidebar menuItems={menuItems} />
      </Wrapper>
    );
  }
}

export default App;
