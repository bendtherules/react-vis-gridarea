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
