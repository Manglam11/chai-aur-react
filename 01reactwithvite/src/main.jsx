import { StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h2>Custom App!</h2>
    </div>
  )
}
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "Chalo chale"
const reactElement = React.createElement(
  'a',
  {
    href: "https://google.com",
    target: "_blank",
  },
  "google m anne k liye dhakka de!", anotherUser
)

createRoot(document.getElementById('root')).render(

  // <MyApp />
  // anotherElement
  reactElement
  // <App />
)
