import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Info,
  Title,
  Subtitle,
  Options,
  Search,
  Menu,
  NotificationsWrapper
} from './Header.styles';
import search from '../../assets/icons/search.png';
import menu from '../../assets/icons/menu.png';
import Notifications from '../Notifications';

const Header = props => (
  <Wrapper>
    <Info>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Info>
    <Options>
      <Search src={search} />
      <Menu src={menu} />
      <NotificationsWrapper>
        <Notifications amount={15} />
      </NotificationsWrapper>
    </Options>
  </Wrapper>
);

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

Header.defaultProps = {
  title: '',
  subtitle: ''
};

export default Header;
