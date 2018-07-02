import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import ChartWithGridAreaHorizontal from './BasicGridAreaHorizontal';
import ChartWithGridAreaVertical from './BasicGridAreaVertical';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Grid area', module)
  .add('Basic Horizontal', () => <ChartWithGridAreaHorizontal onClick={action('clicked')} />)
  .add('Basic Vertical', () => <ChartWithGridAreaVertical onClick={action('clicked')} />)

