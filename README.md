# react-vis-gridarea

## Grid area for react-vis charts

Usage
-----
```
import GridArea from 'react-vis-gridarea';


class TestChart extends React.Component {
  render() {
    
    return (
      <XYPlot
        width={...}
        height={...}>

        // vvvvvv

        <GridArea 
        direction={'horizontal'} 
        highlightRegion={[[4, 6], [8, 11.25]]}
        />

        // ^^^^^^

        <XAxis title="X Axis" />
        <YAxis title="Y Axis" />
        <LineSeries
          data={...}/>
      </XYPlot>
    );
  }
}
```

Looks like this:

![Basic usage screenshot](https://imgur.com/XMHTa1D.png)

Allowed props
--------
Instead of writing about the type of each prop, hopefully the following typescript definition serves the purpose:

https://github.com/bendtherules/react-vis-gridarea/blob/065f56b5214fd9f282bdade68a35544e9af60949/src/grid-area.tsx#L16

```typescript
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
  onValueMouseOver?: (ev: React.MouseEvent<SVGElement>, value: [NumberOrString, NumberOrString]) => void,
  onValueMouseOut?: (ev: React.MouseEvent<SVGElement>, value: [NumberOrString, NumberOrString]) => void,
  onValueClick?: (ev: React.MouseEvent<SVGElement>, value: [NumberOrString, NumberOrString]) => void,
  onSeriesMouseOver?: (ev: React.MouseEvent<SVGElement>) => void,
  onSeriesMouseOut?: (ev: React.MouseEvent<SVGElement>) => void,
  onSeriesClick?: (ev: React.MouseEvent<SVGElement>) => void,

  // generally supplied by xyplot
  // DON'T PASS THIS MANUALLY
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
  innerWidth: number;
  innerHeight: number;
}
```

To describe some of the props:

1. `direction` - The direction along which the grid area takes full length.
2. `highlightRegion` - Its an array of array containing start and end value for each area. The values are along the cross-axis (wrt `direction`) and each value start end creates one area. Currently, you can't create horizontal as well as vertical gridareas using a single instance. To have both, use two separate GridArea instances.
3. `style` - Just passed forward to each rect/area
4. `onValueMouseOver`, `onValueMouseOut`, `onValueClick`, `onSeriesMouseOver`, `onSeriesMouseOut`, `onSeriesClick` - Some event handlers which pass the value/series as second param

