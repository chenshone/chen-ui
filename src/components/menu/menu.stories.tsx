import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Menu from './Menu'
import MenuItem from './MenuItem'
import { SubMenu } from './SubMenu'

export const defaultMenu = () => (
  <Menu
    defaultIndex="0"
    onSelect={(index) => {
      action(`clicked ${index} item`)
    }}
  >
    <MenuItem>cool link</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem>cool link 2</MenuItem>
  </Menu>
)
export const subMenu = () => (
  <Menu
    onSelect={(index) => {
      console.log(index)
    }}
    mode="horizontal"
    defaultOpenSubMenus={['3']}
  >
    <MenuItem>cool link1</MenuItem>
    <MenuItem disabled>cool link2</MenuItem>
    <MenuItem>cool link3</MenuItem>
    <SubMenu title="dropdown">
      <MenuItem>cool link1</MenuItem>
      <MenuItem disabled>cool link2</MenuItem>
      <MenuItem>cool link3</MenuItem>
    </SubMenu>
  </Menu>
)

storiesOf('Menu', module).add('默认', defaultMenu).add('下拉菜单', subMenu)
