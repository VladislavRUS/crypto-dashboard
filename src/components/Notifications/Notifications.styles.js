import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 28px;
  border-radius: 14px;
  background: linear-gradient(137deg, #ff409a 0%, #c438ef 100%);
  box-shadow: 0 4px 31px #ba1358;
  opacity: 0.8;
  cursor: pointer;
`;

export const Bell = styled.img`
  width: 12px;
  height: 12px;
`;

export const Amount = styled.div`
  margin-left: 3px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
`;
