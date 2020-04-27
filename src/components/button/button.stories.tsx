import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './Button'

const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
)

const buttonWithSize = () => (
  <div>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
  </div>
)

const buttonWithType = () => (
  <div>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://google.com">
      {' '}
      link button{' '}
    </Button>
  </div>
)
storiesOf('Button', module)
  .add('默认', defaultButton)
  .add('不同尺寸', buttonWithSize)
  .add('不同类型', buttonWithType)
