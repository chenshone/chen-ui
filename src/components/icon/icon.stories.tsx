import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from './Icon'

export const defaultIcon = () => (
  <Icon icon="coffee" theme="danger" size="10x"></Icon>
)

storiesOf('Icon', module).add('Icon', defaultIcon)
