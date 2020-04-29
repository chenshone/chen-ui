import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('简介', module).add(
  'welcome',
  () => {
    return (
      <div>
        <h1>欢迎来到 chenshoneUI 组件库</h1>
        <p>chenshoneUI是基于react+typescript的仿antD的组件库，仅为作者练手.</p>
        <p>由于使用了hooks， 所以react版本需支持hooks(>= v16.8)</p>
        <h3>安装试试</h3>
        <code>npm install chenshone-ui --save</code>
      </div>
    )
  },
  { info: { disable: true } }
)
