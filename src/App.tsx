import React from 'react'
import Button, { ButtonSize, ButtonType } from './components/button/Button'
import Menu from './components/menu/Menu'
import MenuItem from './components/menu/MenuItem'

import SubMenu from './components/menu/SubMenu'
function App() {
  return (
    <div className="App">
      <Menu
        onSelect={(index) => {
          console.log(index)
        }}
        mode="vertical"
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
    </div>
  )
}

export default App
