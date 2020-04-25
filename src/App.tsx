import React from 'react'
import Button, { ButtonSize, ButtonType } from './components/button/Button'
import Menu from './components/menu/Menu'
import MenuItem from './components/menu/MenuItem'
function App() {
  return (
    <div className="App">
      <Menu
        defaultIndex={0}
        onSelect={(index) => {
          console.log(index)
        }}
      >
        <MenuItem index={0}>cool link1</MenuItem>
        <MenuItem index={1} disabled>
          cool link2
        </MenuItem>
        <MenuItem index={2}>cool link3</MenuItem>
      </Menu>
      <Menu
        defaultIndex={0}
        onSelect={(index) => {
          console.log(index)
        }}
        mode="vertical"
      >
        <MenuItem index={0}>cool link1</MenuItem>
        <MenuItem index={1} disabled>
          cool link2
        </MenuItem>
        <MenuItem index={2}>cool link3</MenuItem>
      </Menu>
      <Button onClick={() => console.log('onclick')}>default</Button>
      <Button disabled>default disabled</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        primary sm
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
        Danger lg
      </Button>
      <Button
        btnType={ButtonType.Link}
        href="http://www.baidu.com"
        target="_blank"
      >
        baidu link
      </Button>
      <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com">
        disabled link
      </Button>
    </div>
  )
}

export default App
