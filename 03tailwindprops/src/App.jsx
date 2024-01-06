import { useState } from 'react'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let myObj  = {
  //   username:'Shreyas',
  //   age:21
  // }
  let newArr =  [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl font-bold mb-5'>Tailwind Test</h1>
      {/*<figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/15776823/pexels-photo-15776823/free-photo-of-seagull-flying-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
  <div className="pt-6 text-cen space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
      </figure>*/}
      <Card username='coffeeaurcode' someObj = {newArr} btnText='Visit Me' username2='madgametrix'/>
    </>
  )
}

export default App
