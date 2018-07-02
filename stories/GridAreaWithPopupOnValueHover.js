import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'react-vis';
import GridArea from '../src/grid-area';
import '../node_modules/react-vis/dist/style.css';

const MSEC_DAILY = 86400000;

export default class GridAreaWithPopupOnValueHover extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.tooltipNode = undefined;
  }
  render() {
    const timestamp = new Date('September 9 2017').getTime();
    const tooltipNodeRect = this.state.tooltipNode ? this.state.tooltipNode.getBoundingClientRect() : undefined;

    return (
      <div>
        <XYPlot
          xType="time"
          width={500}
          height={300}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <GridArea
            direction={'horizontal'}
            highlightRegion={[[4, 5.76], [8.5, 11.25]]}
            onValueMouseOver={(ev, value) => {
              console.log(ev);
              this.setState({ tooltipNode: ev.currentTarget });
            }}
            onValueMouseOut={(ev, value) => {
              console.log(ev);
              this.setState({ tooltipNode: undefined });
            }}
          />

          <XAxis title="X Axis" />
          <YAxis title="Y Axis" />

          <LineSeries
            style={{ 'pointer-events': 'none' }}
            data={[
              { x: timestamp + MSEC_DAILY, y: 3 },
              { x: timestamp + MSEC_DAILY * 2, y: 5 },
              { x: timestamp + MSEC_DAILY * 3, y: 15 },
              { x: timestamp + MSEC_DAILY * 4, y: 12 }
            ]} />
          <LineSeries
            style={{ 'pointer-events': 'none' }}
            data={[
              { x: timestamp + MSEC_DAILY, y: 10 },
              { x: timestamp + MSEC_DAILY * 2, y: 4 },
              { x: timestamp + MSEC_DAILY * 3, y: 2 },
              { x: timestamp + MSEC_DAILY * 4, y: 15 }
            ]} />
        </XYPlot>
        {
          (this.state.tooltipNode !== undefined) ?
            (
              <div className="tooltip" style={{
                position: 'absolute',
                top: (tooltipNodeRect.top + tooltipNodeRect.height),
                left: (tooltipNodeRect.left + tooltipNodeRect.width)
              }}>
                Here's a tooltip
              </div>
            ) :
            (
              undefined
            )
        }

      </div>
    );
  }
}