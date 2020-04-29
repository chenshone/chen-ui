import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from './Icon'

export const defaultIcon = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ margin: 10 + 'px', textAlign: 'center' }}>
      <Icon icon="coffee" theme="danger" size="3x"></Icon>
      <div>coffee</div>
    </div>

    <div style={{ margin: 10 + 'px', textAlign: 'center' }}>
      <Icon icon="spinner" spin size="3x" />
      <div>spinner</div>
    </div>
    <div style={{ margin: 10 + 'px', textAlign: 'center' }}>
      <Icon icon="angle-down" size="3x" />
      <div>angle-down</div>
    </div>
    <div style={{ margin: 10 + 'px', textAlign: 'center' }}>
      <Icon icon="times" size="3x" />
      <div>times</div>
    </div>
    <div style={{ margin: 10 + 'px', textAlign: 'center' }}>
      <Icon icon="times-circle" size="3x" />
      <div>times-circle</div>
    </div>
    <div style={{ margin: 10 + 'px', textAlign: 'center' }}>
      <Icon icon="check-circle" size="3x" />
      <div>check-circle</div>
    </div>
    <div style={{ margin: 10 + 'px', textAlign: 'center' }}>
      <Icon icon="file-alt" size="3x" />
      <div>file-alt</div>
    </div>
  </div>
)

storiesOf('Icon', module).add('Icon', defaultIcon)
