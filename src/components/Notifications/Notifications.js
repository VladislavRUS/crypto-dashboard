import React from 'react';
import { Wrapper, Bell, Amount } from './Notifications.styles';
import bell from '../../assets/icons/bell.png';
import PropTypes from 'prop-types';

const Notifications = props => (
  <Wrapper>
    <Bell src={bell} />
    <Amount>{props.amount}</Amount>
  </Wrapper>
);

Notifications.propTypes = {
  amount: PropTypes.number
};

Notifications.defaultProps = {
  amount: 0
};

export default Notifications;
