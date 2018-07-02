import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import ChartWithGridAreaHorizontal from './BasicGridAreaHorizontal';
import ChartWithGridAreaVertical from './BasicGridAreaVertical';
import ChartWithGridAreaDefaultColor from './GridAreaWithDefaultStyle';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Grid area', module)
  .add('Basic Horizontal', () => <ChartWithGridAreaHorizontal onClick={action('clicked')} />)
  .add('Basic Vertical', () => <ChartWithGridAreaVertical onClick={action('clicked')} />)
  .add('With default style', () => <ChartWithGridAreaDefaultColor onClick={action('clicked')} />)
