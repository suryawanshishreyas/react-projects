import { useState} from 'react';


function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}>
    <h2  className='fixed font-bold text-[80px] text-center h-[50%] bottom-20 left-[40%]'>Pick a Color!</h2>
    <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0'>
    <div className='flex  flex-wrap justify-center shadow-xl bg-gray-900 gap-3 
    px-5 py-2 rounded-lg'>
    <button onClick={()=>setColor('red')} className='outline-none px-4  py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'red'}}>
    Red
    </button>
    <button onClick={()=>setColor('green')} className='outline-none px-4  py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'green'}}>
    Green
    </button>
    <button onClick={()=>setColor('blue')} className='outline-none px-4  py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'blue'}}>
    Blue
    </button>
    <button onClick={()=>setColor('yellow')} className='outline-none px-4  py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'RGB(217 216 0)'}}>
    Yellow
    </button>
    <button onClick={()=>setColor('orange')} className='outline-none px-4  py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'Orange'}}>
    Orange
    </button>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
