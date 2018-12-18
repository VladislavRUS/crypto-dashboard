import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
`;

export const Title = styled.div`
  opacity: 0.9;
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
`;

export const Subtitle = styled.div`
  margin-top: 7px;
  color: #5b5a99;
  font-size: 13px;
  line-height: 1.5;
`;

export const Options = styled.div`
  margin-left: auto;
  display: flex;
  align-self: flex-start;
  align-items: center;
  height: 32px;
`;

const Icon = styled.img`
  margin-left: 38px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  opacity: 0.3;
  display: inline-block;
  align-self: center;

  &:hover {
    opacity: 1;
  }
`;

export const Search = styled(Icon)``;
export const Menu = styled(Icon)``;

export const NotificationsWrapper = styled.div`
  margin-left: 40px;
`;
