import * as React from 'react';
import { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
declare enum Direction {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}
declare type NumberOrString = number | string;
interface GridAreaProps {
    direction: Direction;
    highlightRegion: Array<[NumberOrString, NumberOrString]>;
    style: {
        [styleName: string]: any;
    };
    onValueMouseOver?: (ev: React.MouseEvent<SVGElement>, value: [NumberOrString, NumberOrString]) => void;
    onValueMouseOut?: (ev: React.MouseEvent<SVGElement>, value: [NumberOrString, NumberOrString]) => void;
    onValueClick?: (ev: React.MouseEvent<SVGElement>, value: [NumberOrString, NumberOrString]) => void;
    onSeriesMouseOver?: (ev: React.MouseEvent<SVGElement>) => void;
    onSeriesMouseOut?: (ev: React.MouseEvent<SVGElement>) => void;
    onSeriesClick?: (ev: React.MouseEvent<SVGElement>) => void;
    marginTop: number;
    marginBottom: number;
    marginLeft: number;
    marginRight: number;
    innerWidth: number;
    innerHeight: number;
}
declare class GridArea extends PureComponent<GridAreaProps, {}> {
    static displayName: string;
    static propTypes: {
        direction: PropTypes.Requireable<any>;
        highlightRegion: PropTypes.Requireable<any>;
        style: PropTypes.Requireable<any>;
        onValueMouseOver: PropTypes.Requireable<any>;
        onValueMouseOut: PropTypes.Requireable<any>;
        onValueClick: PropTypes.Requireable<any>;
        onSeriesMouseOver: PropTypes.Requireable<any>;
        onSeriesMouseOut: PropTypes.Requireable<any>;
        onSeriesClick: PropTypes.Requireable<any>;
        marginTop: PropTypes.Requireable<any>;
        marginBottom: PropTypes.Requireable<any>;
        marginLeft: PropTypes.Requireable<any>;
        marginRight: PropTypes.Requireable<any>;
        innerWidth: PropTypes.Requireable<any>;
        innerHeight: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        direction: Direction;
    };
    static requiresSVG: boolean;
    static defaultStyle: {
        fill: string;
    };
    render(): JSX.Element;
}
export default GridArea;
