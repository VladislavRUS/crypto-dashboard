import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  Wrapper,
  IconWrapper,
  Info,
  CostSection,
  Cost,
  Currency,
  TrendSection,
  Trend,
  TrendIcon,
  TrendText
} from './Wallet.styles';
import trendDown from '../../assets/icons/trend_down.png';
import trendUp from '../../assets/icons/trend_up.png';
import Plot, { TRENDS } from './Plot';
import anime from 'animejs';

const transformPointsToString = points => {
  let path = 'M0,0 ';

  for (let i = 0; i < points.length; i++) {
    let start;
    let middle;
    let end;

    if (i === 0) {
      const next = points[i + 1];
      path += `L${next.x / 2},${next.y / 2} `;
    } else if (i === points.length - 1) {
      const last = points[i];
      path += `L${last.x},${last.y}`;
    } else {
      const prev = points[i - 1];
      const current = points[i];
      const next = points[i + 1];

      const startPoint = {
        x: (prev.x + current.x) / 2,
        y: (prev.y + current.y) / 2
      };

      const endPoint = {
        x: (current.x + next.x) / 2,
        y: (current.y + next.y) / 2
      };

      start = `${startPoint.x},${startPoint.y}`;
      middle = `${current.x},${current.y}`;
      end = `${endPoint.x},${endPoint.y}`;

      path += `C${start} ${middle} ${end} `;
    }
  }

  return path;
};

const getTextTrend = trendNumber => (trendNumber > 0 ? TRENDS.UP : TRENDS.DOWN);

class Wallet extends React.Component {
  componentDidUpdate() {
    anime({
      targets: `#path_${this.props.currency}`,
      d: [
        {
          value: transformPointsToString(this.props.points)
        }
      ],
      easing: 'easeInQuad',
      duration: 500
    });
  }

  render() {
    const { icon, cost, currency, trend } = this.props;

    return (
      <Wrapper>
        <IconWrapper>{icon}</IconWrapper>
        <Info>
          <CostSection>
            <Cost>{cost}</Cost>
            <Currency>{currency}</Currency>
          </CostSection>
          <TrendSection>
            <Plot currency={currency} trend={getTextTrend(trend)} />
            <Trend>
              <TrendIcon src={trend > 0 ? trendUp : trendDown} />
              <TrendText trend={getTextTrend(trend)}>{trend}%</TrendText>
            </Trend>
          </TrendSection>
        </Info>
      </Wrapper>
    );
  }
}

Wallet.propTypes = {
  currency: PropTypes.string,
  icon: PropTypes.element,
  cost: PropTypes.number,
  trend: PropTypes.number,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  )
};

export default Wallet;
