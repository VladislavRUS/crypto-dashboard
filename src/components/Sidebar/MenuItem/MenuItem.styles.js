import styled, { css } from 'styled-components';

export const Icon = styled.img`
  margin-left: 67px;
  width: 15px;
  height: 15px;
`;

export const Name = styled.div`
  margin-left: 33px;
  color: #6f6c99;
  font-size: 14px;
  letter-spacing: 0.5px;
`;

const SPHERE_SIZE_PX = 12;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 34px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  ${props =>
    props.active &&
    css`
      & ${Name} {
        color: #53b9ea;
        font-weight: 500;
      }

      &::after {
        content: '';
        position: absolute;
        left: -${SPHERE_SIZE_PX / 2}px;
        top: 50%;
        transform: translateY(-50%);
        width: ${SPHERE_SIZE_PX}px;
        height: ${SPHERE_SIZE_PX}px;
        box-shadow: 0 0 5px #1f1c45;
        background-color: #53b9ea;
        border-radius: 50%;
      }
    `};
`;
