import * as React from 'react';
import { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import {
  AxisUtils,
  ScaleUtils
} from 'react-vis';

const {
  getTicksTotalFromSize,
  getTickValues,
} = AxisUtils;

const { getAttributeScale } = ScaleUtils;

enum Direction {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal'
};

type NumberOrString = number | string;

interface GridAreaProps {
  direction: Direction;
  highlightRegion: Array<[NumberOrString, NumberOrString]>;

  style: {
    [styleName: string]: any;
  }

  // event listeners
  onValueMouseOver: (ev: React.MouseEvent<SVGElement>, value: [NumberOrString, NumberOrString]) => void,
  onValueMouseOut: (ev: React.MouseEvent<SVGElement>, value: [NumberOrString, NumberOrString]) => void,
  onValueClick: (ev: React.MouseEvent<SVGElement>, value: [NumberOrString, NumberOrString]) => void,
  onSeriesMouseOver: (ev: React.MouseEvent<SVGElement>) => void,
  onSeriesMouseOut: (ev: React.MouseEvent<SVGElement>) => void,
  onSeriesClick: (ev: React.MouseEvent<SVGElement>) => void,

  // generally supplied by xyplot
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
  innerWidth: number;
  innerHeight: number;
}

const GridAreaPropTypes = {
  direction: PropTypes.oneOf([Direction.VERTICAL, Direction.HORIZONTAL]),
  highlightRegion: PropTypes.arrayOf(PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )),

  style: PropTypes.object,

  // event listeners
  onValueMouseOver: PropTypes.func,
  onValueMouseOut: PropTypes.func,
  onValueClick: PropTypes.func,
  onSeriesMouseOver: PropTypes.func,
  onSeriesMouseOut: PropTypes.func,
  onSeriesClick: PropTypes.func,

  // generally supplied by xyplot
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  innerWidth: PropTypes.number,
  innerHeight: PropTypes.number,
};

class GridArea extends PureComponent<GridAreaProps, {}> {
  static displayName = 'GridArea';
  static propTypes = GridAreaPropTypes;
  static defaultProps = {
    direction: Direction.VERTICAL
  };

  static requiresSVG = true;

  static defaultStyle = {
    fill: 'rgba(0,0,0,0.25)'
  }

  render() {
    const {
      innerWidth: width,
      innerHeight: height,
      marginTop: top,
      marginLeft: left,
    } = this.props;

    const style = { ...GridArea.defaultStyle, ...this.props.style };

    const axisDirection = (this.props.direction === Direction.VERTICAL ? Direction.HORIZONTAL : Direction.VERTICAL);
    const isVertical = (axisDirection === Direction.VERTICAL);

    const primaryAxisName = isVertical ? 'y' : 'x';
    const crossAxisName = isVertical ? 'x' : 'y';
    const primaryLengthAttr = isVertical ? 'height' : 'width';
    const crossLengthAttr = isVertical ? 'width' : 'height';
    const primaryLength = isVertical ? height : width;
    const crossLength = isVertical ? width : height;


    const scale = getAttributeScale({
      ...this.props,
      width,
      height,
      top,
      left
    }, primaryAxisName);
    const values = this.props.highlightRegion;

    return (
      <g
        transform={`translate(${left},${top})`}
        className="rv-xy-plot__grid-areas"
        onClick={this.props.onSeriesClick}
        onMouseOver={this.props.onSeriesMouseOver}
        onMouseOut={this.props.onSeriesMouseOut}
      >
        {values.map((tmpValue, i) => {
          const pos: number[] = [];
          pos[0] = scale(tmpValue[0]);
          pos[1] = scale(tmpValue[1]);

          const minPos = Math.min(...pos);
          const maxPos = Math.max(...pos);

          const rectProps = {
            [crossAxisName]: 0,
            [crossLengthAttr]: crossLength,
            [primaryAxisName]: minPos,
            [primaryLengthAttr]: maxPos - minPos,
          };

          const tmpRect = (
            <rect
              {...rectProps}
              key={i}
              className="rv-xy-plot__grid-area__rect"
              style={style}
              onClick={(ev) => { this.props.onValueClick(ev, tmpValue) }}
              onMouseOver={(ev) => { this.props.onValueMouseOver(ev, tmpValue) }}
              onMouseOut={(ev) => { this.props.onValueMouseOut(ev, tmpValue) }}
            />
          );

          return (
            
          );
        })}
      </g>
    );
  }
}

export default GridArea;
