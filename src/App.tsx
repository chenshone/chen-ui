import React from 'react'
import Button, { ButtonSize, ButtonType } from './components/button/Button'
function App() {
  return (
    <div className="App">
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
