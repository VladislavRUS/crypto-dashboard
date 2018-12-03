import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Icon, Name } from './MenuItem.styles';

const MenuItem = props => (
  <Wrapper active={props.active}>
    <Icon src={props.icon} />
    <Name>{props.name}</Name>
  </Wrapper>
);

MenuItem.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool
};

MenuItem.defaultProps = {
  name: '',
  icon: '',
  active: false
};

export default MenuItem;
