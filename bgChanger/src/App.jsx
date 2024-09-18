import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("rebeccapurple")

  return (
    <>
      <div className='h-screen w-full ' style={{backgroundColor:color}}>
        <div className='flex flex-wrap justify-center fixed bottom-10 inset-x-10'>
          <div className='bg-white gap-3 rounded-full px-4 py-2 flex flex-wrap'>
            
            <button onClick={() => setColor("blue")} className='text-white px-3 rounded-full border-none' style={{backgroundColor:"blue"}}>blue</button>

            <button onClick={() => setColor("black")} className='text-white px-3 py-1 flex justify-center align-center rounded-full border-none' style={{backgroundColor:"black"}}>black</button>
            
            <button onClick={() => setColor("green")} className='text-white px-3 rounded-full flex py-1 justify-center align-center border-none' style={{backgroundColor:"green"}}>green</button>
            
            <button onClick={() => setColor("brown")} className='text-white px-3 py-1 flex justify-center align-center rounded-full border-none' style={{backgroundColor:"brown"}}>brown</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
