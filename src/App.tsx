import React, { useState, FC } from 'react'

const App: FC = () => {
  const [title, setTitle] = useState('')
  return (
    <div className="App">
      <header>
        <h1>{title}</h1>
      </header>
    </div>
  )
}

export default App
