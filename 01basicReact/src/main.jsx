import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit Google!'
// }
const anotherElement  =  (
  <a href='https://google.com' target='_blank' rel="noreferrer">Visit Google</a>
)
const anotherUser = 'coffee aur react'

const  reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to visit google  ',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
