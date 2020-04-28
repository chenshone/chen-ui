import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from './Input'
const defaultInput = () => (
  <div>
    <Input
      style={{ width: '300px' }}
      placeholder="placeholder"
      onChange={action('changed')}
    />
  </div>
)
const disabledInput = () => (
  <Input style={{ width: '300px' }} placeholder="disabled input" disabled />
)

const iconInput = () => (
  <Input
    style={{ width: '300px' }}
    placeholder="input with icon"
    icon="search"
  />
)

const sizeInput = () => (
  <div>
    <Input style={{ width: '300px' }} defaultValue="large size" size="lg" />
    <Input style={{ width: '300px' }} placeholder="small size" size="sm" />
  </div>
)

const pandInput = () => (
  <div>
    <Input
      style={{ width: '300px' }}
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input style={{ width: '300px' }} defaultValue="google" append=".com" />
  </div>
)

storiesOf('Input', module)
  .add('默认', defaultInput)
  .add('被禁用', disabledInput)
  .add('带图标', iconInput)
  .add('不同大小', sizeInput)
  .add('带前后缀', pandInput)
