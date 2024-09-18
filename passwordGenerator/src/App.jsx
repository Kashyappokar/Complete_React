import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [passLength, setPassLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*{}()~`"
    }

    for (let i = 1; i <= passLength; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      
      pass += str[char]
    }

    setPassword(pass)

  },[passLength, numAllowed, charAllowed,setPassword]);

  useEffect(() => {
    passwordGenerator()
  },[passLength, numAllowed, charAllowed, passwordGenerator])

  const copytoclipboard = useCallback( () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  },[password])
  return (
    <>
        <div 
        className='w-full h-screen flex flex-col items-center justify-center' 
        style={{backgroundColor:'#212121'}}>

          <div
          className='bg-gray-800 w-2/4 px-4 py-3 rounded-2xl flex flex-col justify-center items-center'>  
          <h1 
          className='text-white text-center text-2xl mb-6'>Password Generator
          </h1>
          
          <div
          className='flex'>
        
            <input 
            type="text"
            value={password}
            className='rounded-full mb-5 h-11 w-64 px-3 py-3 flex items-center border-none text-2xl'
            placeholder='PassWord'
            readOnly
            id='passwordBar'
            ref={passwordRef}
            style={{marginRight:"10px"}}/>
        
            <button
            onClick={copytoclipboard}
              className='bg-blue-700 text-white px-5 py-1 rounded-full h-11 w-17 font-semibold hover:bg-blue-500'>Copy
            </button>
        
          </div>
        
          <div 
            className='flex gap-x-5 '>
          
            <input 
            type="range"
            className="cursor-pointer duration-1000"
            min={4}
            max={10} 
            value={passLength}
            onChange={(e) => {setPassLength(e.target.value)}}
            />
          
            <span 
            className='text-white'>Password length: {passLength}
            </span>

            <input 
            type="checkbox" 
            id='numallowed'
            defaultChecked={numAllowed}
            className='cursor-pointer'
            onChange={() => setNumAllowed((prev) => !prev)}/>

            <span 
            className='text-white'>Numbers
            </span>

            <input 
            type="checkbox"
            id='charallowed'
            defaultChecked={charAllowed}
            className='cursor-pointer'
            onChange={() => setcharAllowed((prev) => !prev)}/>

            <span
            className='text-white'>Characters
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
