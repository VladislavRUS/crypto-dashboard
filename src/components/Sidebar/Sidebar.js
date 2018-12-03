import React from 'react';
import { Wrapper, Logo, Menu } from './Sidebar.styles';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const Sidebar = props => (
  <Wrapper>
    <Logo src={logo} />
    <Menu>
      {props.menuItems.map((item, idx) => (
        <MenuItem
          key={idx}
          name={item.name}
          icon={item.icon}
          active={idx === 0}
        />
      ))}
    </Menu>
  </Wrapper>
);

Sidebar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      ...MenuItem.propTypes
    })
  )
};

Sidebar.defaultProps = {
  menuItems: []
};

export default Sidebar;
