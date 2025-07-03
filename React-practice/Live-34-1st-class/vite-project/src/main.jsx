import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// 'use strict'


// lets export something
// export default function addABC(a, b) {
  // return a + b;
// }

// or
// export const add = (a, b) => {
//   return a + b;
// }

// import korle kaj korbe