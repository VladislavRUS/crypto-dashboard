import React from 'react';
import PropTypes from 'prop-types';

export const TRENDS = {
  UP: 'up',
  DOWN: 'down'
};

const TREND_UP_COLORS = {
  START: '#392f60',
  END: '#2e90ef'
};

const TREND_DOWN_COLORS = {
  START: '#792ca1',
  END: '#d84d77'
};

const Plot = props => (
  <svg width="30" height="10" viewBox="0 0 30 10">
    <defs>
      <linearGradient
        id={props.currency}
        x1="0%"
        y1="0%"
        x2="80%"
        y2="0%"
        spreadMethod="pad"
      >
        <stop
          offset="0%"
          stopColor={
            props.trend === TRENDS.UP
              ? TREND_UP_COLORS.START
              : TREND_DOWN_COLORS.START
          }
        />
        <stop
          offset="100%"
          stopColor={
            props.trend === TRENDS.UP
              ? TREND_UP_COLORS.END
              : TREND_DOWN_COLORS.END
          }
        />
      </linearGradient>
    </defs>
    <path
      id={'path_' + props.currency}
      d={
        'M0,0 L0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 L29,0'
      }
      stroke={`url(#${props.currency})`}
      fill="transparent"
      strokeWidth={1}
    />
  </svg>
);

Plot.propTypes = {
  points: PropTypes.string,
  trend: PropTypes.string,
  id: PropTypes.string
};

export default Plot;
