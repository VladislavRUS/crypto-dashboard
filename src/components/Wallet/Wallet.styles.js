import styled from 'styled-components';
import { TRENDS } from './Plot';

export const Wrapper = styled.div`
  display: flex;
  width: 190px;
  height: 74px;
  border-radius: 10px;
  border: 1px solid #232049;
  cursor: pointer;
  transition: border 0.2s ease;

  &:hover {
    border: 1px solid #454296;
  }
`;

export const IconWrapper = styled.div`
  margin: 0 20px;
  width: 25px;
  height: 25px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CostSection = styled.div`
  display: flex;
  margin-top: 14px;
  align-items: center;
`;

export const Cost = styled.div`
  opacity: 0.7;
  color: #ffffff;
  font-size: 17px;
`;

export const Currency = styled.div`
  margin-left: 13px;
  opacity: 0.2;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const TrendSection = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
`;

export const Trend = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const TrendIcon = styled.img`
  margin-right: 6px;
  width: 6px;
  height: 6px;
`;

export const TrendText = styled.div`
  width: 37px;
  height: 13px;
  color: ${props => (props.trend === TRENDS.UP ? '#50e3c2' : '#e3507a')};
  font-size: 11px;
`;
