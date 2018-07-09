import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import BasicGridAreaHorizontal from './BasicGridAreaHorizontal';
import BasicGridAreaVertical from './BasicGridAreaVertical';
import GridAreaWithDefaultStyle from './GridAreaWithDefaultStyle';
import GridAreaWithSeriesEventListeners from './GridAreaWithSeriesEventListeners';
import GridAreaWithValueEventListeners from './GridAreaWithValueEventListeners';
import GridAreaWithPopupOnValueHover from './GridAreaWithPopupOnValueHover';
import GridAreaWithPopupOnValueClick from './GridAreaWithPopupOnValueClick';

storiesOf('Grid area', module)
  .add('Basic Horizontal', () => <BasicGridAreaHorizontal />)
  .add('Basic Vertical', () => <BasicGridAreaVertical />)
  .add('With default style', () => <GridAreaWithDefaultStyle />)
  .add('With series event handler', () => <GridAreaWithSeriesEventListeners />)
  .add('With value event handler', () => <GridAreaWithValueEventListeners />)
  .add('With value event hover tooltip', () => <GridAreaWithPopupOnValueHover />)
  .add('With value event click tooltip', () => <GridAreaWithPopupOnValueClick />)
