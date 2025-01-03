import { useState } from 'react'
import './App.css'

function App() {
  function handleClick(): string {
    const ret = console.log('clicked');
    return ret
  }
  return (
    <>
      <h1>My name is Bekbolat</h1>
      <button onClick={handleClick}>change name</button>
    </>
  )
}

export default App
