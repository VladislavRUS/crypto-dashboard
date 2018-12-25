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
import ReactTimeout from 'react-timeout';

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

const PLOT_VALUES = {
  MAX_X: 30,
  MAX_Y: 10,
  NUMBER_OF_POINTS: 5
};

const ANIMATION_DURATION = 750;

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wallet: {
        icon: props.icon,
        currency: props.currency,
        cost: this.getCost(),
        trend: 0.0,
        points: this.getPoints()
      }
    };
  }

  componentDidMount() {
    this.props.setInterval(this.updateWalletValues, ANIMATION_DURATION);
  }

  updateWalletValues = () => {
    const { wallet } = this.state;

    const trend = this.getTrend();
    const points = this.getNextPoints(wallet.points);

    this.setState({
      wallet: {
        ...wallet,
        trend,
        points
      }
    });

    this.updatePoints();
  };

  updatePoints() {
    const { wallet } = this.state;

    anime({
      targets: `#path_${wallet.currency}`,
      d: [
        {
          value: transformPointsToString(wallet.points)
        }
      ],
      easing: 'easeInQuad',
      duration: ANIMATION_DURATION
    });
  }

  getCost() {
    return parseFloat((Math.random() * 100 + 1).toFixed(3));
  }

  getTrend() {
    return parseFloat((Math.random() * 20 - 10).toFixed(2));
  }

  getPoints() {
    const points = [];

    const step = parseInt(PLOT_VALUES.MAX_X / PLOT_VALUES.NUMBER_OF_POINTS);

    for (let i = 0; i <= PLOT_VALUES.MAX_X; i += step) {
      points.push({
        x: i,
        y: parseInt(Math.random() * PLOT_VALUES.MAX_Y, 10)
      });
    }

    return points;
  }

  getNextPoints(points) {
    const nextPoints = [...points];

    nextPoints.forEach((point, idx) => {
      if (idx === nextPoints.length - 1) {
        return;
      }

      const next = nextPoints[idx + 1];

      point.y = next.y;
    });

    const last = nextPoints[nextPoints.length - 1];
    last.y = parseInt(Math.random() * PLOT_VALUES.MAX_Y, 10);

    return nextPoints;
  }

  render() {
    const { wallet } = this.state;

    if (!wallet) {
      return null;
    }

    const { icon, cost, currency, trend } = wallet;

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
  icon: PropTypes.element
};

export default ReactTimeout(Wallet);
