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
    direction:Direction.VERTICAL
  };

  static requiresSVG = true;

  render() {
    const {
      innerWidth: width,
      innerHeight: height,
      marginTop: top,
      marginLeft: left,
      style
    } = this.props;

    const isVertical = (this.props.direction === Direction.VERTICAL);
    const tickXAttr = isVertical ? 'y' : 'x';
    const tickYAttr = isVertical ? 'x' : 'y';
    const length = isVertical ? height : width;

    const scale = getAttributeScale({
      ...this.props,
      width,
      height,
      top,
      left
    }, 'y');
    const values = this.props.highlightRegion;

    return (
      <g
        transform={`translate(${left},${top})`}
        className="rv-xy-plot__grid-areas"
      >
        {values.map((v, i) => {
          const pos: number[] = [];
          pos[0] = scale(v[0]);
          pos[1] = scale(v[1]);

          const minPos = Math.min(...pos);
          const maxPos = Math.max(...pos);

          const rectProps = {
            x: 0,
            width: width,
            y: minPos,
            height: maxPos - minPos,
          };
          return (
            <rect
              {...rectProps}
              key={i}
              className="rv-xy-plot__grid-area__rect"
              style={style}
            />
          );
        })}
      </g>
    );
  }
}

export default GridArea;
