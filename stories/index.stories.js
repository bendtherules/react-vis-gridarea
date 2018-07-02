import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import BasicGridAreaHorizontal from './BasicGridAreaHorizontal';
import BasicGridAreaVertical from './BasicGridAreaVertical';
import GridAreaWithDefaultStyle from './GridAreaWithDefaultStyle';
import GridAreaWithSeriesEventListeners from './GridAreaWithSeriesEventListeners';
import GridAreaWithValueEventListeners from './GridAreaWithValueEventListeners';
import GridAreaWithPopupOnValueHover from './GridAreaWithPopupOnValueHover';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Grid area', module)
  .add('Basic Horizontal', () => <BasicGridAreaHorizontal />)
  .add('Basic Vertical', () => <BasicGridAreaVertical />)
  .add('With default style', () => <GridAreaWithDefaultStyle />)
  .add('With series event handler', () => <GridAreaWithSeriesEventListeners />)
  .add('With value event handler', () => <GridAreaWithValueEventListeners />)
  .add('With value event hover tooltip', () => <GridAreaWithPopupOnValueHover />)

