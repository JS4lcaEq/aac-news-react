import { useState } from 'react'
import './App.css'
import { RouterProvider } from "react-router-dom"
import Router from "./routes/router"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './app/slice'


function App() {
  const router = Router
  const [count, setCount] = useState(0)
  const counter = useSelector((state) => state.counter.value)
  return (
    <div className="App">

      <div id="upp">
        <span>
          <span id="logo">AAC</span>
          <span id="sub-logo">News</span>
        </span>
        <span id="upp-counter">counter = {counter}</span>
      </div>

      <div id="content">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <ul>
          <li>
            <a href={`#/`}>/ (root)</a>
          </li>
          <li>
            <a href={`#/contacts/1`}>/contacts/1</a>
          </li>
          <li>
            <a href={`#/contacts/2`}>/contacts/2</a>
          </li>
          <li>
            <a href={`#/page`}>#/page</a>
          </li>
        </ul>

        <hr />

        <RouterProvider router={router} />

      </div>
      <div id="bottom">
        <span>AAC &copy; 2023</span>
      </div>
    </div>
  )
}

export default App
