import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoList from './component/TodoList'
import './app.css'
import './styles/list.css'
import './styles/addBar.css'
import './styles/filter.css'

function App() {

  return (
    <div className="App">
      <TodoList />
    </div>
  )
}

export default App
