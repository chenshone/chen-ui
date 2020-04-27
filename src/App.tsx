import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button, { ButtonSize, ButtonType } from './components/button/Button'
import Menu from './components/menu/Menu'
import MenuItem from './components/menu/MenuItem'
import SubMenu from './components/menu/SubMenu'
import Icon from './components/icon/Icon'
import Transition from './components/transition/Transition'

library.add(fas)
function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <Icon icon="coffee" theme="danger" size="10x"></Icon>
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
      <Button size="lg" onClick={() => setShow(!show)}>
        toggle
      </Button>
      <Transition in={show} timeout={300} animation="zoom-in-top">
        <div>
          <p>
            Edit <code>src/App.tsx</code> and save to reload
          </p>
        </div>
      </Transition>
      <Transition in={show} timeout={300} animation="zoom-in-top" wrapper>
        <Button size="lg" btnType="primary">
          a large button
        </Button>
      </Transition>
    </div>
  )
}

export default App
