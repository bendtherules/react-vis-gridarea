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

export default class BasicChartWithGrid extends React.Component {
  render() {
    const timestamp = new Date('September 9 2017').getTime();
    return (
      <XYPlot
        xType="time"
        width={500}
        height={300}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <GridArea 
        direction={'vertical'} 
        style={{fill:"rgba(0,255,0,0.4)"}}
        highlightRegion={[[4, 5.76], [8.5, 11.25]]}
        />

        <XAxis title="X Axis" />
        <YAxis title="Y Axis" />
        
        <LineSeries
          data={[
            {x: timestamp + MSEC_DAILY, y: 3},
            {x: timestamp + MSEC_DAILY * 2, y: 5},
            {x: timestamp + MSEC_DAILY * 3, y: 15},
            {x: timestamp + MSEC_DAILY * 4, y: 12}
          ]}/>
        <LineSeries
          data={null}/>
        <LineSeries
          data={[
            {x: timestamp + MSEC_DAILY, y: 10},
            {x: timestamp + MSEC_DAILY * 2, y: 4},
            {x: timestamp + MSEC_DAILY * 3, y: 2},
            {x: timestamp + MSEC_DAILY * 4, y: 15}
          ]}/>
      </XYPlot>
    );
  }
}