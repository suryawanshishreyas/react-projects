/* eslint-disable react/jsx-no-target-blank */
import './App.css'
import Coffee from './Coffee';

function App() {
  const username= 'Coffe aur React Coding';
  return (
    <>
      <div>
        <Coffee/>
        <p>Coffee with react in Hindi: {username}</p>
      </div>      
    </>
  )
}

export default App
